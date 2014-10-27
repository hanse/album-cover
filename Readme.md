# album-cover [![Build Status](https://travis-ci.org/Hanse/album-cover.svg)](https://travis-ci.org/Hanse/album-cover)

> Fetch album covers from [last.fm](http://www.last.fm/)

```js
var covers = require('album-cover');

covers.search({
  artist: 'Pendulum',
  album: 'Watercolour'
}, function(err, res) {
  console.log(res);
});
```

## License
MIT
