var request = require('superagent');

module.exports = function (apiKey) {
  var apiBaseUrl = 'http://ws.audioscrobbler.com/2.0/';

  return {
    search: function (opts, fn) {
      var artist = opts.artist;
      var album  = opts.album;
      var size   = opts.size || 'large';

      var method = (album) ? 'album.getinfo' : 'artist.getinfo';
      var apiReqUrl = apiBaseUrl+'?method='+method+'&artist=' + artist + '&album=' + album + '&api_key=' + apiKey + '&format=json';
      request.get(apiReqUrl, function (err, res) {
        if (err) return fn(err, '');
        if (res.body.error) return fn(res.body.message, '');

        var images = ((res.body.album) ? res.body.album.image : res.body.artist.image) || [];

        var result;
        if (size == 'all') {
          result = {};
          for (var s in images) {
            result[s] = images[s]['#text'];
          }
        } else {
          result = (images.filter(function (image) {
            return image.size === size;
          })[0] || {})['#text'];

          if (!result) { // Not available in the given size, fallback to another one
            size = Object.keys(images).pop();
            result = (images[size] || {})['#text'];
          }
        }

        fn(null, result || '');
      });
    }
  };
};
