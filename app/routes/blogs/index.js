import Route from '@ember/routing/route';
import { BLOG_ARTICLES } from '../../configurations/blog-config';

export default class BlogsIndexRoute extends Route {
  model() {
    return BLOG_ARTICLES;
  }
}
