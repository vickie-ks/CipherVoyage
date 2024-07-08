import Service from '@ember/service';
import { inject as service } from '@ember/service';
import copyToClipboard from '../utils/copy-to-clipboard';

export default class DomModifierService extends Service {
  @service('-document') document;

  appendShareButton(targetId) {
    let target = this.document.getElementById(targetId);
    let div = this.document.createElement('div');
    div.className = 'share-btn text-success';
    div.title = 'Click to copy URL';
    div.setAttribute('tabindex', '0');

    let icon = this.document.createElement('i');
    icon.className = 'fas fa-share-square';
    div.appendChild(icon);

    let span = this.document.createElement('span');
    span.className = 'share-text p-1';
    span.textContent = 'Share';
    div.appendChild(span);

    let br = this.document.createElement('br');

    div.addEventListener('click', () => copyToClipboard(span));

    target.parentNode.insertBefore(br, target.nextSibling);
    target.parentNode.insertBefore(div, target.nextSibling);
  }
}
