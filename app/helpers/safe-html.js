import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export default helper(function safeHtml([html]) {
  return htmlSafe(html);
});
