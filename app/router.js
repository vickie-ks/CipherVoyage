import EmberRouter from '@ember/routing/router';
import config from 'cipher-voyage/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('about', function () {
    this.route('me');
    this.route('my-projects');
  });
  this.route('contact');
  this.route('blogs', function () {
    this.route('index', { path: '/' });
    this.route('blog', { path: '/:blog_id' });
  });
  this.route('quests', function () {
    this.route('index', { path: '/' });
    this.route('quest', { path: '/:quest_id' });
  });
  this.route('echoes', function () {
    this.route('index', { path: '/' });
    this.route('echo', { path: '/:echo_id' });
  });
  this.route('page-not-found', { path: '/*path' });
});
