# ember-redux-offline-shim

babel 6 is required so please use ember-cli v2.13.0+

    ember install ember-lodash-es-shim
    ember install ember-json-stringify-safe-shim
    ember install ember-redux-persist-shim
    ember install ember-redux-offline-shim

remove the ember-lodash-shim dependency from your package.json

In your app/index.html be sure to hack in 2 globals :(

    <script>
      var process = {
        env: {
          NODE_ENV: 'development'
        }
      };
      var global = {
        setImmediate: window.setTimeout
      }
    </script>
