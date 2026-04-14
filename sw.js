
self.addEventListener('push', function(event) {
    const data = event.data.json();
    const options = {
        body: data.body,
        icon: 'GL_Logo.png', // Iyong logo
        badge: 'GL_Logo.png',
        vibrate: [200, 100, 200],
        data: { url: data.url }
    };
    event.waitUntil(
        self.notificationPermission === 'granted' && 
        self.registration.showNotification(data.title, options)
    );
});

// Idagdag mo ito sa sw.js mo
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://printingservicesgl-svg.github.io/gl-printing-services/')
    );
});