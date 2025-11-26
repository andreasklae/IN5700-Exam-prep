import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, isConfigured } from '../config/firebase';

// Single shared document ID - everyone uses the same storage
const SHARED_DOC_ID = 'shared-progress';

// Save progress to shared cloud storage
export const saveToCloud = async (progress) => {
  if (!db || !isConfigured) {
    return false; // Silently fail if not configured
  }
  
  try {
    const docRef = doc(db, 'progress', SHARED_DOC_ID);
    await setDoc(docRef, {
      ...progress,
      lastSync: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    // Silently fail for offline errors
    if (error.code === 'unavailable' || error.code === 'failed-precondition') {
      return false;
    }
    return false;
  }
};

// Load progress from shared cloud storage
export const loadFromCloud = async () => {
  if (!db || !isConfigured) {
    return null; // Return null if not configured
  }
  
  try {
    const docRef = doc(db, 'progress', SHARED_DOC_ID);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    }
    return null;
  } catch (error) {
    // Silently fail
    return null;
  }
};

// Auto-sync progress (called periodically)
export const autoSync = async (progress) => {
  if (!db || !isConfigured) {
    return false;
  }
  
  try {
    await saveToCloud(progress);
    return true;
  } catch (error) {
    return false;
  }
};


