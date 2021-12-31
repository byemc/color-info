console.log("I do nothing.");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'script',
    new workbox.strategies.NetworkFirst()
);
