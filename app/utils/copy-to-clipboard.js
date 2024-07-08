import { copy } from '@ember/object/internals';

export default function copyToClipboard(element) {
  const url = window.location.href;
  const el = document.createElement('textarea');
  el.value = url;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  const originalText = element.textContent;
  element.textContent = 'Copied!!';
  setTimeout(() => {
    element.textContent = originalText;
  }, 2000);
}
