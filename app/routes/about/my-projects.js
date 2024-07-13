import Route from '@ember/routing/route';
import { MY_PROJECTS } from '../../configurations/my-config';

export default class AboutMyProjectsRoute extends Route {
  model() {
    return {
      title: MY_PROJECTS.title,
      description: MY_PROJECTS.description,
      articlesList: MY_PROJECTS.articlesList,
    };
  }
}
