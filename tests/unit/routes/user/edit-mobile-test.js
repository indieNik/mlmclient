import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user/edit-mobile', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user/edit-mobile');
    assert.ok(route);
  });
});
