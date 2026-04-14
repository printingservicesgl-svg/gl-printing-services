self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SHOW_NOTIFICATION') {
        self.registration.showNotification(event.data.title, {
            body: event.data.body,
            icon: 'GL_Logo.png', // Siguraduhin na exist ang file na ito
            vibrate: [200, 100, 200]
        });
    }
});