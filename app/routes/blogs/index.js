import Route from '@ember/routing/route';
import { BLOG_ARTICLES } from '../../configurations/blog-config';

export default class BlogsIndexRoute extends Route {
  model() {
    return {
      title: BLOG_ARTICLES.title,
      description: BLOG_ARTICLES.description,
      transitionTo: BLOG_ARTICLES.transitionTo,
      articlesList: BLOG_ARTICLES.articlesList,
    };
  }
}
