module.exports = function(server) {
  
  // configuration for devices for which initial power settings are controlled
  const config = require('./config');
  
  const power = require('./power');

   config.devices.forEach(function(device) {
    new power(server, device);
  });
  
}
