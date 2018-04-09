const tap = require('../../../node_modules/tap');

tap.test('geolocator is cool', function(t){
  const geo = require('../build/nlmaps-geolocator.cjs.js');
  t.assert(typeof geo === 'function');
  t.throws(geo(), 'navigator is NOT defined but we expected that')
  t.end();

});