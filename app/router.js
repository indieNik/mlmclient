import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('user', function() {
    this.route('profile');
    this.route('edit');
    this.route('new');
    this.route('new-admin');
    this.route('all');
    this.route('edit-bank');
  });
});

export default Router;
