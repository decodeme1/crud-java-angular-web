const PROXY_CONFIG = [
  {
    context: ['/api'],
    secure: false,
    target: 'http://localhost:8081',
    logLevel: 'debug',
  }
];
module.exports = PROXY_CONFIG;