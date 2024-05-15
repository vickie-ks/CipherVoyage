import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestsQuestRoute extends Route {
  @service questStore;

  model(params) {
    return this.questStore.getQuestById(params.quest_id);
  }
}
