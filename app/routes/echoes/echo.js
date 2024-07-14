import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EchoesEchoRoute extends Route {
  @service echoStore;
  @service router;

  model(param) {
    let file = this.echoStore.getEchoById(param.echo_id);
    if (!file) {
      this.router.transitionTo('echoes');
      return;
    }
    return fetch(file.filePath).then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch the Markdown file');
      }
      return response.text();
    });
  }
}
