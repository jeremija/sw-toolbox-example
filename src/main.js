console.log('initializing main.js')

if ('serviceWorker' in window.navigator) {
  window.navigator.serviceWorker
  .register('/sw-workbox.js?version=1.0.0&debug=true')
  .then(registration => {
    console.log('registered service worker', registration)
    registration.addEventListener('updatefound', event => {
      console.log('updatefound')
    })
  })
  .catch(err => {
    console.log('err', err.stack)
  })
}
