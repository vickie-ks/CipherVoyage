import Service from '@ember/service';
import { BLOG_ARTICLES } from '../configurations/blog-config';

export default class BlogStoreService extends Service {
  blogs = BLOG_ARTICLES.articlesList;

  getBlogById(id) {
    return this.blogs.find((blog) => blog.id === id);
  }
  getBlogs() {
    return this.blogs;
  }
}
