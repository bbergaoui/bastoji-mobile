#!/usr/bin/env node
var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
  files: ['./package.json', './www/**/*'],
  appName: 'Copay',
  platforms: ['win64', 'osx64', 'linux64'],
  buildDir: './desktop',
  version: '0.21.6',
  macIcns: './resources/copay/mac/app.icns',
  exeIco: './resources/copay/windows/icon.ico',
  macPlist: {
    CFBundleURLTypes: [
      {
        CFBundleURLName: 'URI Handler',
        CFBundleURLSchemes: ['bastoji', 'bastojicash', 'copay']
      }
    ]
  }
});

// Log stuff you want
nw.on('log', console.log);

nw.build()
  .then(function() {
    console.log('all done!');
  })
  .catch(function(error) {
    console.error(error);
  });
