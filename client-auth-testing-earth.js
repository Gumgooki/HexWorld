var ee = require('@google/earthengine');

var initialize = function () {
  ee.initialize(
    null,
    null,
    function () {
      //run analysis..
    },
    function (e) {
      console.error('Initialization error: ' + e);
    }
  );
};

ee.data.authenticateViaOauth(
  '1013755550674-ts3v4tu1h4psb4mh1hualt5hfr7eshqf.apps.googleusercontent.com',
  initialize,
  function (e) {
    console.error('Authentication error: ' + e);
  },
  null,
  function () {
    ee.data.authenticateViaPopup(initialize);
  }
);
