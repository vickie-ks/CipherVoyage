import { helper } from '@ember/component/helper';

export default helper(function formatDate([date], { formatOptions }) {
  let options = formatOptions || {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(date).toLocaleDateString('en-US', options);
});
