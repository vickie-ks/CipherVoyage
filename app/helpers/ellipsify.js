import { helper } from '@ember/component/helper';

export default helper(function ellipsify([text, wordLimit]) {
  const words = text.split(' ');

  if (words.length > wordLimit) {
    return {
      truncatedText: words.slice(0, wordLimit).join(' ') + '..',
      isTruncated: true,
    };
  } else {
    return {
      truncatedText: text,
      isTruncated: false,
    };
  }
});
