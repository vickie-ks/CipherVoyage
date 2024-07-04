import { module, test } from 'qunit';
import { setupTest } from 'cipher-voyage/tests/helpers';

module('Unit | Service | echo-store', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:echo-store');
    assert.ok(service);
  });
});
