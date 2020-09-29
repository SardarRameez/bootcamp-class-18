import firebase from 'firebase';

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
  const messaging=firebase.messaging();

export function initNotification(){
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission==="granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token =>", currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}