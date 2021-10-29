// import config from '../src/firebase-config';
// import firebase from 'firebase';
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js');

// // Initialize Firebase
// if (!firebase.length) {
//   firebase.initializeApp(config);
// }
// // const messaging = firebase.messaging();
// // messaging
// //   .requestPermission()
// //   .then(async () => {
// //     console.log('허가!');
// //     // Auth.notificationToken = await messaging.getToken();
// //     // console.info(Auth.notificationToken);
// //     // return Auth.notificationToken;
// //     return messaging.getToken();
// //   })
// //   .catch(function (err) {
// //     console.log('fcm에러 : ', err);
// //     messaging.onMessage((payload) => {
// //       console.log(payload);
// //     });
// //   });

firebase.initializeApp({
  messagingSenderId: '1062407524656',
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: 'window',
      includeUncontrolled: true,
    })
    .then((windowClients) => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification('my notification title');
    });
  return promiseChain;
});

self.addEventListener('notificationclick', function (event) {
  // do what you want
  // ...
});
