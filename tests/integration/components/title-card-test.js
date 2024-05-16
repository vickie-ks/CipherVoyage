import { module, test } from 'qunit';
import { setupRenderingTest } from 'cipher-voyage/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | title-card', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<TitleCard />`);
    assert.dom('#intro').exists('');
  });
});
