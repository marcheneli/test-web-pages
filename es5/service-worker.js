self.addEventListener('push', function(event) {
    console.log('Received a push message', event);
  
    console.log(JSON.stringify(event));
    
    data = event.data;

    console.log(data.json());

    var title = data.json().title;
    var body = data.json().body;
    var icon = './images/icon-192x192.png';
    var tag = 'simple-push-demo-notification-tag';

    if (event.data) {
        console.log("EVENTDATA");
        console.log(event);
    }

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );
});
  
self.addEventListener('notificationclick', function(event) {
    console.log('On notification click: ', event.notification.tag);
    // Android doesn’t close the notification when you click on it
    // See: http://crbug.com/463146
    event.notification.close();
  
    // This looks to see if the current is already open and
    // focuses if it is
    /*event.waitUntil(self.clients.matchAll({
      type: 'window'
    }).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url === '/' && client instanceof WindowClient) {
          return client.focus();
        }
      }

      if (self.clients.openWindow) {
        return self.clients.openWindow('/');
      }
    }));*/
});
