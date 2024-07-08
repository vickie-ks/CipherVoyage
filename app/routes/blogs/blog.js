import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

export default class BlogsBlogRoute extends Route {
  @service blogStore;
  @service domModifier;

  activate() {
    scheduleOnce('afterRender', this, () => {
      this.domModifier.appendShareButton('copyUrl');
    });
  }

  model(param) {
    let file = this.blogStore.getBlogById(param.blog_id);
    return fetch(file.filePath).then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch the Markdown file');
      }
      return response.text();
    });
  }
}
