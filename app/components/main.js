import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { HOME_CONFIG } from '../configurations/home-config';

export default class MainComponent extends Component {
  @tracked sites = HOME_CONFIG.SITES;
  @tracked cards = HOME_CONFIG.CARDS;
}
