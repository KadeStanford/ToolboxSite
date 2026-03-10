// ========================================
// ToolNook — Firebase Configuration
// ========================================
//
// SETUP INSTRUCTIONS (one-time, ~10 minutes):
//
//  1. Go to https://console.firebase.google.com/
//  2. Click "Add project" → give it a name (e.g. "toolnook-prod")
//  3. Skip Google Analytics if you want, or enable it
//  4. Once created: Project Settings (gear icon, top-left) → General tab
//     → Scroll to "Your apps" → click </> (Web) → Register app
//  5. Copy the firebaseConfig object values into the fields below
//
//  6. Enable Firestore:
//     Build (sidebar) → Firestore Database → Create database
//     → Start in "production mode" → pick a region → Done
//
//  7. Enable Authentication:
//     Build → Authentication → Get started → Sign-in method
//     → Email/Password → Enable → Save
//
//  8. Create your admin account:
//     Authentication → Users → Add user → enter your email + password
//
//  9. Set Firestore Security Rules (Build → Firestore → Rules tab):
//
//     rules_version = '2';
//     service cloud.firestore {
//       match /databases/{database}/documents {
//         match /analytics/{doc} {
//           allow write: if true;           // tools write usage data
//           allow read:  if request.auth != null; // only admin reads
//         }
//         match /shorts/{doc} {
//           allow read: if true;             // URL shortener reads
//           allow write: if true;            // URL shortener writes
//         }
//         match /pastes/{doc} {
//           allow read: if true;
//           allow write: if true;
//         }
//         match /{document=**} {
//           allow read, write: if request.auth != null;
//         }
//       }
//     }
//
// 10. Paste your values below, then set TN_FIREBASE_ENABLED = true
// =========================================================

const TN_FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ⚠️  Change to true ONLY after replacing ALL values above with real ones
const TN_FIREBASE_ENABLED = false;
