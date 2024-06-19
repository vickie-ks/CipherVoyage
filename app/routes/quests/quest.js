import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class QuestsQuestRoute extends Route {
  @service questStore;

  model(param) {
    let file = this.questStore.getQuestById(param.quest_id);
    return fetch(file.filePath).then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch the Markdown file');
      }
      return response.text();
    });
  }
}
