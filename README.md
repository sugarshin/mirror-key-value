# mirror-key-value

[![Build Status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Devdependency Status][david-dev-image]][david-dev-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

Mirroring to keys and values from array of strings

```
npm i mirror-key-value
```

## Usage

```js
import mirrorKeyValue from 'mirror-key-value';

mirrorKeyValue(['val1', 'val2']); // => { val1: 'val1', val2: 'val2' }
```

Create action types of Flux application as an example use

```js
export default mirrorKeyValue([
  'ADD_TODO',
  'DELETE_TODO',
  'CHANGE_COMPLETE'
]);
```

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/mirror-key-value.svg
[npm-url]: https://www.npmjs.org/package/mirror-key-value
[bower-image]: http://img.shields.io/bower/v/mirror-key-value.svg
[bower-url]: http://bower.io/search/?q=mirror-key-value
[travis-image]: http://img.shields.io/travis/sugarshin/mirror-key-value/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/mirror-key-value
[david-image]: https://david-dm.org/sugarshin/mirror-key-value.svg
[david-url]: https://david-dm.org/sugarshin/mirror-key-value
[david-dev-image]: https://david-dm.org/sugarshin/mirror-key-value/dev-status.svg
[david-dev-url]: https://david-dm.org/sugarshin/mirror-key-value#info=devDependencies
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/mirror-key-value/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/mirror-key-value
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fes6-module-skeleton
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/mirror-key-value.svg
