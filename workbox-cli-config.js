module.exports = {
  'globDirectory': '/',
  'globPatterns': [
    '/index.html',
    '/sw*.js',
    '**/*.js'
  ],
  'swSrc': './out/sw.js',
  'swDest': './out/sw-workbox.js',
  'globIgnores': [
    '/workbox-cli-config.js'
  ]
}
