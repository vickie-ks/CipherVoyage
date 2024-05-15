import EmberRouter from '@ember/routing/router';
import config from 'cipher-voyage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('about');
  this.route('contact');
  this.route('blogs', function () {
    this.route('index', { path: '/' });
    this.route('blog', { path: '/:blog_id' });
  });
  this.route('quests', function () {
    this.route('index', { path: '/' });
    this.route('quest', { path: '/:quest_id' });
  });
});
