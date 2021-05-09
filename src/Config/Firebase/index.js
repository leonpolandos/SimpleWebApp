import firebase from 'firebase';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwS_cMvlFO-BltgB2FyvK_Vb1ITFz4G2g",
    authDomain: "simple-web-app-81c8f.firebaseapp.com",
    databaseURL: "https://simple-web-app-81c8f-default-rtdb.firebaseio.com",
    projectId: "simple-web-app-81c8f",
    storageBucket: "simple-web-app-81c8f.appspot.com",
    messagingSenderId: "70347600209",
    appId: "1:70347600209:web:e63767404e07af64196370"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;