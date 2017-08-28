/* eslint-env serviceworker */
import Workbox from 'workbox-sw'
import url from 'url'
import querystring from 'querystring'

const location = url.parse(self.location.href)
const params = querystring.parse(location.query)

const workbox = new Workbox({
  cacheId: 'app_' + params.version,
  clientsClaim: true
})

const logLevels = {
  true: workbox.LOG_LEVEL.verbose,
  false: workbox.LOG_LEVEL.none
}
workbox.logLevel = logLevels[params.debug === 'true']

const networkFirst = workbox.strategies.networkFirst()

workbox.precache([]);

workbox.router.registerRoute('/out/main.js', networkFirst)
workbox.router.registerRoute('/', networkFirst)
workbox.router.registerRoute('/sw.js', networkFirst)

console.log('workbox', workbox)

self.addEventListener('install', event => {
  // toolbox handles main install events.
  console.log('installed')
})
