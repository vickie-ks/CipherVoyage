import Route from '@ember/routing/route';
import { QUEST_ARTICLES } from '../../configurations/blog-config';

export default class QuestsIndexRoute extends Route {
  model() {
    return {
      title: QUEST_ARTICLES.title,
      description: QUEST_ARTICLES.description,
      transitionTo: QUEST_ARTICLES.transitionTo,
      articlesList: QUEST_ARTICLES.articlesList,
    };
  }
}
