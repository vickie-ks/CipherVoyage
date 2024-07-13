import Service from '@ember/service';
import { QUEST_ARTICLES } from '../configurations/blog-config';

export default class QuestStoreService extends Service {
  quests = QUEST_ARTICLES.articlesList;

  getQuestById(id) {
    return this.quests.find((quest) => quest.id === id);
  }
  getQuests() {
    return this.quests;
  }
}
