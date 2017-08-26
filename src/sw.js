/* eslint-env serviceworker */
const querystring = require('querystring')
const toolbox = require('sw-toolbox')
const url = require('url')

const location = url.parse(self.location.href)
const params = querystring.parse(location.query)
toolbox.options.cache.name = 'app_' + params.version
toolbox.options.debug = params.debug === 'true'

toolbox.precache([
  '/',
  '/index.html',
  '/out/main.js'
])

toolbox.router.get('/out/main.js', toolbox.networkFirst)
toolbox.router.get('/', toolbox.networkFirst)
toolbox.router.get('/index.html', toolbox.networkFirst)

self.addEventListener('install', event => {
  // toolbox handles main install events.
  console.log('installed')
})
