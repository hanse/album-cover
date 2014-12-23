# album-cover [![Build Status](https://travis-ci.org/Hanse/album-cover.svg)](https://travis-ci.org/Hanse/album-cover)

> Fetch album covers from [last.fm](http://www.last.fm/)

```bash
$ npm install album-cover
```

```js
var covers = require('album-cover')('api key from last.fm');

covers.search({
  artist: 'Pendulum',
  album: 'Watercolour',
  size: 'mega'
}, function(err, res) {
  console.log(res);
});
```

If you want to get all available sizes, set `size` to `all`. If you want an artist picture instead of an album cover, do not specify `artist`.

## License

MIT
