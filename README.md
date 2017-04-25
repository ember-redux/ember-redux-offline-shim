# ember-redux-offline-shim

babel 6 is required so please use ember-cli v2.13.0+

    ember install ember-redux
    ember install ember-fetch
    ember install ember-lodash-es-shim
    ember install ember-json-stringify-safe-shim
    ember install ember-redux-persist-shim
    ember install ember-redux-offline-shim

remove the ember-lodash-shim dependency from your package.json

## example application

https://github.com/toranb/ember-redux-yelp/commits/branches/reduxOffline

### offline actions are defined in the welp result component

https://github.com/toranb/ember-redux-yelp/blob/1d85dd147f9a51d6d570b5df44b0c4e3499edad3/app/components/welp-result/component.js

### offline reducers are defined in the results reducer

https://github.com/toranb/ember-redux-yelp/blob/1d85dd147f9a51d6d570b5df44b0c4e3499edad3/app/reducers/results.js
