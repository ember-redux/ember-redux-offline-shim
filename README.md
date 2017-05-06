# ember-redux-offline-shim

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

babel 6 is required so please use ember-cli v2.13.0+

```bash
ember install ember-redux
ember install ember-fetch
ember install ember-lodash-shim
ember install ember-json-stringify-safe-shim
ember install ember-redux-persist-shim
ember install ember-redux-offline-shim
```

## Usage

```js
//app/enhancers/index.js

import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/defaults';

export default offline(offlineConfig);
```

To learn more about `redux-offline` and how to use it visit the [redux-offline](https://github.com/jevakallio/redux-offline) Github page.

## Example

https://github.com/toranb/ember-redux-yelp/commits/branches/reduxOffline

The offline actions are defined in the welp result component

https://github.com/toranb/ember-redux-yelp/blob/1d85dd147f9a51d6d570b5df44b0c4e3499edad3/app/components/welp-result/component.js

The offline reducers are defined in the results reducer

https://github.com/toranb/ember-redux-yelp/blob/1d85dd147f9a51d6d570b5df44b0c4e3499edad3/app/reducers/results.js

[ci-img]: https://img.shields.io/travis/ember-redux/ember-redux-offline-shim.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ember-redux/ember-redux-offline-shim
[ember-img]: https://img.shields.io/badge/ember-1.13.13+-green.svg "Ember 1.13.13+"
[npm-img]: https://img.shields.io/npm/v/ember-redux-offline-shim.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-redux-offline-shim
