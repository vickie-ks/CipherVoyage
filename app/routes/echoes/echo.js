import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EchoesEchoRoute extends Route {
  @service echoStore;

  model(param) {
    let file = this.echoStore.getEchoById(param.echo_id);
    return fetch(file.filePath).then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch the Markdown file');
      }
      return response.text();
    });
  }
}
