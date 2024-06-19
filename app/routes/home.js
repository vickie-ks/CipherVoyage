import Route from '@ember/routing/route';
import { HOME_CONFIG } from '../configurations/home-config';

export default class HomeRoute extends Route {
  model() {
    return HOME_CONFIG.SITES;
  }
}
