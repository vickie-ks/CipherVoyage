import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BlogsBlogRoute extends Route {
  @service blogStore;

  model(params) {
    return this.blogStore.getBlogById(params.blog_id);
  }
}
