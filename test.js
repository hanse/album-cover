var assert = require('assert');
var coverImages = require('./');

var apiKey = '6cb4e4ac02504c6157f3609df73a6e0f';

describe('coverImages', function() {
  it('should return a url', function(done) {
    coverImages(apiKey)
      .search({
        artist: 'Empire of the Sun',
        album: 'Ice On The Dune',
        size: 'mega'
      }, function(err, result) {
        assert.equal(result, 'http://userserve-ak.last.fm/serve/_/88582381/Ice+on+the+Dune+PNG.png');
        done();
      });
  });

  it('should return an object of urls', function(done) {
    coverImages(apiKey)
      .search({
        artist: 'Empire of the Sun',
        album: 'Ice On The Dune',
        size: 'all'
      }, function(err, result) {
        assert.equal(typeof result, 'object');
        done();
      });
  });

  it('should return a url, even if the size is incorrect', function(done) {
    coverImages(apiKey)
      .search({
        artist: 'Empire of the Sun',
        album: 'Ice On The Dune',
        size: 'megagigaextra'
      }, function(err, result) {
        assert.notEqual(result, '');
        done();
      });
  });

  it('should return an artist picture url', function(done) {
    coverImages(apiKey)
      .search({
        artist: 'Madonna',
        size: 'large'
      }, function(err, result) {
        assert.equal(result, 'http://userserve-ak.last.fm/serve/126/102597335.png');
        done();
      });
  });

  it('should fail with no empty image url', function(done) {
    coverImages(apiKey)
      .search({
        artist: '64e424263f75a6813399e794d801b574fcc1bd99', // Hope such an artist will never exist
        album: '64e424263f75a6813399e794d801b574fcc1bd99',
        size: 'mega'
      }, function(err, result) {
        assert.equal(result, '');
        done();
      });
  })
});
