import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BlogsIndexRoute extends Route {
  @service blogStore;

  model() {
    return this.blogStore.getBlogs();
  }
}
