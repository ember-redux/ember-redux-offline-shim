import { test, module } from 'qunit';
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/defaults';

module('redux offline export tests');

test('exports for offline function', function(assert) {
  assert.equal(typeof offline, 'function');
});

test('exports for offlineConfig function', function(assert) {
  assert.equal(typeof offlineConfig, 'object');
});
