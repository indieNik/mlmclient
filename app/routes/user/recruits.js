import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.query('user', {
            orderBy: 'userRID',
            equalTo: localStorage.getItem("authenticatedUserUID")
        });
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
        this.controller.set('loggedInUser', this.controllerFor("user").get('authenticatedUser'));
    }
});
