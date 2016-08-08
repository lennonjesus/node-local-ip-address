'use strict'

var os = require('os');

module.exports = () => {

  let ifaces = os.networkInterfaces();
  let lookupIpAddress = null;

  for (let dev in ifaces) {
    ifaces[dev].forEach((details) => {
      if (details.family == 'IPv4') {
        lookupIpAddress = details.address;
        break;
      }
    });
  }

  return lookupIpAddress;
};
