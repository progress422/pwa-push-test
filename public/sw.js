importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

// import { getToken } from 'firebase/messaging';

// // Your existing Service Worker logic below
// // (Precaching, fetch handling, etc)
// // BMuqicDEKYewQecSiObnuJ8cV2Gd3E8lOSzE8wrTaBtTMuR6-66N4z3abqmxJZQ84U7VcXT08PaRHjp3Gk4f00o
// // Initialize Firebase App inside SW
// firebase.initializeApp({
//   apiKey: 'AIzaSyB0iuZzabjCGefy9OokK6UFxOvF6jJaTAU',
//   authDomain: 'push-notifications-test-4bdb0.firebaseapp.com',
//   projectId: 'push-notifications-test-4bdb0',
//   storageBucket: 'push-notifications-test-4bdb0.firebasestorage.app',
//   messagingSenderId: '158709240339',
//   appId: '1:158709240339:web:e5b363e9773e5abed1e5e6',
// });

// // Initialize Firebase Messaging
// const messaging = firebase.messaging();

// // Handle background push messages
// messaging.onBackgroundMessage(function (payload) {
//   console.log('[sw.js] Received background message ', payload);
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: '/icons/icon-192x192.png',
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// Your other SW event listeners (install, activate, fetch, etc.) remain untouched

// This is your Service Worker, you can put any of your custom Service Worker
// code in this file, above the `precacheAndRoute` line.

// When widget is installed/pinned, push initial state.
self.addEventListener('widgetinstall', (event) => {
  event.waitUntil(updateWidget(event));
});

// When widget is shown, update content to ensure it is up-to-date.
self.addEventListener('widgetresume', (event) => {
  event.waitUntil(updateWidget(event));
});

// When the user clicks an element with an associated Action.Execute,
// handle according to the 'verb' in event.action.
self.addEventListener('widgetclick', (event) => {
  if (event.action == 'updateName') {
    event.waitUntil(updateName(event));
  }
});

// When the widget is uninstalled/unpinned, clean up any unnecessary
// periodic sync or widget-related state.
self.addEventListener('widgetuninstall', (event) => {});

const updateWidget = async (event) => {
  // The widget definition represents the fields specified in the manifest.
  const widgetDefinition = event.widget.definition;

  // Fetch the template and data defined in the manifest to generate the payload.
  const payload = {
    template: JSON.stringify(
      await (await fetch(widgetDefinition.msAcTemplate)).json()
    ),
    data: JSON.stringify(await (await fetch(widgetDefinition.data)).json()),
  };

  // Push payload to widget.
  await self.widgets.updateByInstanceId(event.instanceId, payload);
};

const updateName = async (event) => {
  const name = event.data.json().name;

  // The widget definition represents the fields specified in the manifest.
  const widgetDefinition = event.widget.definition;

  // Fetch the template and data defined in the manifest to generate the payload.
  const payload = {
    template: JSON.stringify(
      await (await fetch(widgetDefinition.msAcTemplate)).json()
    ),
    data: JSON.stringify({ name }),
  };

  // Push payload to widget.
  await self.widgets.updateByInstanceId(event.instanceId, payload);
};

self.addEventListener('push', (event) => {
  event.waitUntil(
    registration.showNotification('Hello!', {
      body: 'This is a push notification!',
    })
  );
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

