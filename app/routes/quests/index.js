import Route from '@ember/routing/route';
import { QUEST_ARTICLES } from '../../configurations/blog-config';

export default class QuestsIndexRoute extends Route {
  model() {
    return QUEST_ARTICLES;
  }
}
