import Route from '@ember/routing/route';

export default class AboutMeRoute extends Route {
  model() {
    return fetch('_about/me.md').then((response) => {
      if (!response.ok) {
        throw new Error('Could not fetch the Markdown file');
      }
      return response.text();
    });
  }
}
