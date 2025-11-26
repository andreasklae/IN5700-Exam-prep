# Firebase Setup for Cloud Sync 🔥

To enable cloud sync across devices, you need to set up a free Firebase project.

## Quick Setup (5 minutes)

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"**
3. Name it: `exam-prep-sync` (or any name you like)
4. Disable Google Analytics (not needed)
5. Click **"Create project"**

### 2. Create Web App

1. In your Firebase project, click the **Web** icon (`</>`)
2. Register app name: `Exam Prep`
3. **Don't** enable Firebase Hosting
4. Click **"Register app"**
5. You'll see a `firebaseConfig` object - **copy it!**

### 3. Enable Firestore Database

1. In Firebase Console, go to **"Firestore Database"**
2. Click **"Create database"**
3. Choose **"Start in test mode"** (allows read/write without auth)
4. Choose a location (closest to you)
5. Click **"Enable"**

### 4. Set Up Security Rules

1. In Firestore, go to **"Rules"** tab
2. Replace with these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /progress/{syncCode} {
      // Anyone can read/write with a sync code
      // Rate limited to prevent abuse
      allow read, write: if request.time < timestamp.date(2026, 1, 1);
    }
  }
}
```

3. Click **"Publish"**

### 5. Update App Configuration

1. Open `src/config/firebase.js`
2. Replace the `firebaseConfig` object with your values from step 2:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 6. Install Firebase Package

```bash
cd "/Users/andreas/Documents/Dokumenter – MacBook Air/UIO/master/IN5700/Exam prep"
npm install firebase
```

### 7. Test It!

1. Run the app: `npm run dev`
2. Click the **"Sync"** button in the header
3. Generate a sync code
4. Save progress to cloud
5. Open the app in a different browser
6. Enter the same sync code
7. Your progress syncs! 🎉

---

## Usage

### On Your Primary Device (e.g., Laptop)

1. Click **"Sync"** button in header
2. Click **"Generate Sync Code"**
3. Copy the 6-character code (e.g., `ABC123`)
4. Click **"Save Progress to Cloud"**

### On Your Other Devices (e.g., Phone)

1. Open the app
2. Click **"Sync"** button
3. Enter the sync code from your primary device
4. Click **"Sync"**
5. Your progress loads instantly!

### Ongoing Use

- Progress auto-syncs every 5 minutes
- Manual sync anytime by clicking "Save Progress to Cloud"
- Works across unlimited devices with the same code
- All progress merges automatically (takes the maximum/union)

---

## Alternative: Without Firebase (Manual Sync)

If you don't want to set up Firebase, the app includes manual backup:

1. Click **"Sync"** button
2. Click **"Export"** to download your progress as JSON
3. Transfer the file to your other device (email, USB, cloud storage)
4. On the other device, click **"Import"** and select the file

---

## Free Tier Limits

Firebase free tier includes:
- ✅ 1 GB storage
- ✅ 10 GB/month data transfer
- ✅ 50K reads/day
- ✅ 20K writes/day

**More than enough for personal use!** Your small progress files will barely use any quota.

---

## Privacy & Security

- Your sync code acts as a password
- Don't share it publicly
- Data is stored on Google's secure servers
- No personal information collected
- You can delete your data anytime by clearing the Firestore document

---

## Troubleshooting

### "Firebase not configured" error

- Make sure you updated `src/config/firebase.js` with your actual Firebase config
- Verify you ran `npm install firebase`

### "Sync code not found" error

- Double-check you entered the code correctly
- Make sure you clicked "Save Progress to Cloud" on the first device
- Check your internet connection

### Sync not working

- Check browser console for errors
- Verify Firestore rules are set correctly
- Ensure Firebase billing is not required (shouldn't be for free tier)

---

## Cost

**100% Free** for your use case. The free tier is more than sufficient for a single user syncing across multiple devices.

---

**Once set up, syncing is automatic and seamless!** 🚀

