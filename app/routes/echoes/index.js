import Route from '@ember/routing/route';
import { ECHO_ARTICLES } from '../../configurations/echo-config';

export default class EchoesIndexRoute extends Route {
  model() {
    return {
      title: ECHO_ARTICLES.title,
      description: ECHO_ARTICLES.description,
      transitionTo: ECHO_ARTICLES.transitionTo,
      articlesList: ECHO_ARTICLES.articlesList,
    };
  }
}
