// var ee = require('@google/earthengine');
// var privateKey = require('./hexworld-auth-key.json');

// var runAnalysis = function () {
//   ee.initialize(
//     null,
//     null,
//     function () {
//       //run analysis
//     },
//     function (e) {
//       console.error('initialization error: ' + e);
//     }
//   );
// };

// ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
//   console.error('Authentication error: ' + e);
// });

var ee = require('@google/earthengine');
var privateKey = require('./hexworld-auth-key.json');

ee.data.authenticateViaPrivateKey(privateKey);

ee.initialize();

var image = new ee.Image('srtm90_v4');
image.getMap({ min: 0, max: 1000 }, function (map) {
  console.log(map);
});
