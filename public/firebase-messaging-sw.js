importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js'); 
const firebaseConfig = {
    apiKey: "AIzaSyBVByTSljGxRCfIw0EJ8lTECq5oeAmpYKs",
    authDomain: "notificationapp-83b46.firebaseapp.com",
    databaseURL: "https://notificationapp-83b46.firebaseio.com",
    projectId: "notificationapp-83b46",
    storageBucket: "notificationapp-83b46.appspot.com",
    messagingSenderId: "285565587938",
    appId: "1:285565587938:web:3a7fff40725ee4407aa9bb"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();