var request = require('superagent');

module.exports = function(apiKey) {

  var apiUrl = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo';

  return {

    search: function(opts, fn) {

      var artist = opts.artist;
      var album  = opts.album;
      var size   = opts.size || 'large';

      apiUrl += '&artist=' + artist + '&album=' + album + '&api_key=' + apiKey + '&format=json';
      request.get(apiUrl, function(err, res) {
        if (err) return fn(err);
        if (res.body.error) return fn(res.body.message);

        var images = res.body.album.image || [];
        var result = (images.filter(function(image) {
          return image.size === size;
        })[0] || {})['#text'];

        fn(null, result || 'No image was found');
      });
    },
  };
};
