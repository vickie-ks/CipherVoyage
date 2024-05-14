import { module, test } from 'qunit';
import { setupTest } from 'cipher-voyage/tests/helpers';

module('Unit | Route | quest', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:quest');
    assert.ok(route);
  });
});
