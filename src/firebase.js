
 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: import.meta.env.REACT_APP_API_KEY,
//   authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
//   projectId: import.meta.env.REACT_APP_PROJECT_ID,
//   storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.REACT_APP_MESSEGING_SENDER_ID,
//   appId: import.meta.env.REACT_APP_APP_ID,
//   measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyDHJvjUcRu0Pu22LC0lHuESxYSl50ey2V8",
  authDomain: "fvitereact.firebaseapp.com",
  projectId: "fvitereact",
  storageBucket: "fvitereact.appspot.com",
  messagingSenderId: "1065032944479",
  appId: "1:1065032944479:web:7299fb0be04a91674684ea",
  measurementId: "G-H3LGZGEJHY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;