import Route from '@ember/routing/route';
import { ECHO_ARTICLES } from '../../configurations/echo-config';

export default class EchoesIndexRoute extends Route {
  model() {
    return ECHO_ARTICLES;
  }
}
