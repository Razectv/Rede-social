// Importa as bibliotecas compatíveis do Firebase para o Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Configuração do seu projeto (mesma usada no seu index.html)
firebase.initializeApp({
  apiKey: "AIzaSyDtNh6DX5NZNzJdoTWN9Dklu97munmJf1w",
  authDomain: "gestaofazenda-106ec.firebaseapp.com",
  databaseURL: "https://gestaofazenda-106ec-default-rtdb.firebaseio.com",
  projectId: "gestaofazenda-106ec",
  storageBucket: "gestaofazenda-106ec.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
});

const messaging = firebase.messaging();

// Esta função roda em segundo plano quando o app está fechado e chega uma notificação
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || "Corse";
  const notificationOptions = {
    body: payload.notification.body || "Você tem uma nova mensagem",
    icon: "/logo-icon.png"
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
