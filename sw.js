// sw.js
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        const options = {
            body: event.data.body,
            icon: 'GL_Logo.png', // Siguraduhing tama ang filename ng logo mo
            vibrate: [200, 100, 200],
            requireInteraction: true,
            data: { url: self.location.origin }
        };
        self.registration.showNotification(event.data.title, options);
    }
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});