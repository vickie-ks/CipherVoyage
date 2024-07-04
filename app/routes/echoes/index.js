import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EchoesIndexRoute extends Route {
  @service echoStore;

  model() {
    return this.echoStore.getEchoes();
  }
}
