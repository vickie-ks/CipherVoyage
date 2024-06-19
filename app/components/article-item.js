import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ArticleItemComponent extends Component {
  @service router;

  @action
  goToArticle(articles, event) {
    event.preventDefault();
    this.router.transitionTo(this.args.transitionTo, articles.id);
  }
}
