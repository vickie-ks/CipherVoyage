import Route from '@ember/routing/route';
import { MY_PROJECTS } from '../../configurations/my-config';

export default class AboutMyProjectsRoute extends Route {
  model() {
    return MY_PROJECTS;
  }
}
