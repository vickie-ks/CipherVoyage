import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { TOPNAV_CONFIG } from '../configurations/top-nav-config';

export default class TopNavComponent extends Component {
  @tracked urls = TOPNAV_CONFIG.URLS;
  @tracked socs = TOPNAV_CONFIG.SOC;
}
