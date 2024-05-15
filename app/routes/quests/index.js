import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestsIndexRoute extends Route {
  @service questStore;

  model() {
    return this.questStore.getQuests();
  }
}
