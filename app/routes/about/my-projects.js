import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { MY_PROJECTS } from '../../configurations/my-config';

export default class AboutMyProjectsRoute extends Route {
  @service blogStore;

  model() {
    return MY_PROJECTS;
  }
}
