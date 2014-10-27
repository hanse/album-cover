var assert = require('assert');
var coverImages = require('./');

var apiKey = '6cb4e4ac02504c6157f3609df73a6e0f';

describe('coverImages', function() {
  it('should return a url', function(done) {
    coverImages('6cb4e4ac02504c6157f3609df73a6e0f')
      .search({
        artist: 'Empire of the Sun',
        album: 'Ice On The Dune',
        size: 'mega'
      }, function(err, result) {
        assert.equal(result, 'http://userserve-ak.last.fm/serve/_/88582381/Ice+on+the+Dune+PNG.png');
        done();
      });
  });

  it('should fail with no image message', function(done) {
    coverImages('6cb4e4ac02504c6157f3609df73a6e0f')
      .search({
        artist: null,
        album: null,
        size: 'mega'
      }, function(err, result) {
        assert.equal(result, 'No image was found');
        done();
      });
  })
});
