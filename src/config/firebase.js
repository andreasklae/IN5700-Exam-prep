import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - using free tier, no authentication required
const firebaseConfig = {
  apiKey: "AIzaSyBxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX",
  authDomain: "exam-prep-sync.firebaseapp.com",
  projectId: "exam-prep-sync",
  storageBucket: "exam-prep-sync.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345"
};

// Note: You'll need to create a Firebase project and replace these values
// Instructions in FIREBASE_SETUP.md

let app;
let db;
let isConfigured = false;

// Check if Firebase config is valid (not placeholder values)
const isValidConfig = () => {
  return firebaseConfig.apiKey && 
         firebaseConfig.apiKey !== "AIzaSyBxXxXxXxXxXxXxXxXxXxXxXxXxXxXxXxX" &&
         firebaseConfig.projectId &&
         firebaseConfig.projectId !== "exam-prep-sync";
};

try {
  if (isValidConfig()) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    isConfigured = true;
  }
} catch (error) {
  // Silently fail - Firebase not configured
  db = null;
  isConfigured = false;
}

export { db, isConfigured };

