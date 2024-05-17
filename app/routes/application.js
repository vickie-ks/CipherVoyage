import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service router;

  beforeModel() {
    const currentUrl = window.location.href;
    if (
      !currentUrl.includes('home') &&
      !currentUrl.includes('blogs') &&
      !currentUrl.includes('quests') &&
      !currentUrl.includes('about')
    ) {
      this.router.transitionTo('home');
    }
  }
}
