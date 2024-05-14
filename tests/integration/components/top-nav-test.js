import { module, test } from 'qunit';
import { setupRenderingTest } from 'cipher-voyage/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | top-nav', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<TopNav />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <TopNav>
        template block text
      </TopNav>
    `);

    assert.dom().hasText('template block text');
  });
});
