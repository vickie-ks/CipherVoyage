import Service from '@ember/service';
import { ECHO_ARTICLES } from '../configurations/echo-config';

export default class EchoStoreService extends Service {
  echoes = ECHO_ARTICLES;

  getEchoById(id) {
    return this.echoes.find((echo) => echo.id === id);
  }
  getEchoes() {
    return this.echoes;
  }
}
