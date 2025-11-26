import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

// Generate a simple 6-character sync code
export const generateSyncCode = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
};

// Save progress to cloud with sync code
export const saveToCloud = async (syncCode, progress) => {
  if (!db) {
    throw new Error('Firebase not configured');
  }
  
  try {
    const docRef = doc(db, 'progress', syncCode);
    await setDoc(docRef, {
      ...progress,
      lastSync: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error('Error saving to cloud:', error);
    throw error;
  }
};

// Load progress from cloud with sync code
export const loadFromCloud = async (syncCode) => {
  if (!db) {
    throw new Error('Firebase not configured');
  }
  
  try {
    const docRef = doc(db, 'progress', syncCode);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error('Sync code not found');
    }
  } catch (error) {
    console.error('Error loading from cloud:', error);
    throw error;
  }
};

// Auto-sync progress (called periodically)
export const autoSync = async (syncCode, progress) => {
  if (!syncCode || !db) return;
  
  try {
    await saveToCloud(syncCode, progress);
    return true;
  } catch (error) {
    console.error('Auto-sync failed:', error);
    return false;
  }
};

// Merge progress from two devices (takes the maximum/union of all values)
export const mergeProgress = (local, cloud) => {
  return {
    totalPoints: Math.max(local.totalPoints || 0, cloud.totalPoints || 0),
    streak: Math.max(local.streak || 0, cloud.streak || 0),
    lastStudyDate: local.lastStudyDate > cloud.lastStudyDate 
      ? local.lastStudyDate 
      : cloud.lastStudyDate,
    studyDays: [...new Set([...(local.studyDays || []), ...(cloud.studyDays || [])])],
    topicsStudied: {
      ...cloud.topicsStudied,
      ...local.topicsStudied,
      // Merge arrays for each topic
      ...Object.keys(local.topicsStudied || {}).reduce((acc, key) => {
        acc[key] = [...new Set([
          ...(cloud.topicsStudied?.[key] || []),
          ...(local.topicsStudied?.[key] || [])
        ])];
        return acc;
      }, {})
    },
    flashcardsReviewed: [...new Set([
      ...(local.flashcardsReviewed || []),
      ...(cloud.flashcardsReviewed || [])
    ])],
    quizzesCompleted: [...new Set([
      ...(local.quizzesCompleted || []),
      ...(cloud.quizzesCompleted || [])
    ])],
    achievements: [...new Set([
      ...(local.achievements || []),
      ...(cloud.achievements || [])
    ])],
    topicProgress: {
      ...cloud.topicProgress,
      ...local.topicProgress,
    },
    quizScores: [...(cloud.quizScores || []), ...(local.quizScores || [])],
    studySessions: Math.max(local.studySessions || 0, cloud.studySessions || 0),
    syncCode: cloud.syncCode || local.syncCode,
  };
};

