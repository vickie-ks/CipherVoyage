import { module, test } from 'qunit';
import { setupRenderingTest } from 'cipher-voyage/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Main />`);
    assert.dom('#product').exists();
  });
});
