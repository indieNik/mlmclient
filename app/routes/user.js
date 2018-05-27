import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),

    model() {
        return this.store.findAll("user");
    },

    beforeModel: function() {
        if(!this.get('session').get("currentUser")) {
            console.log("Unauthenticated Request");
            this.transitionTo("index"); // Unauthenticated Request
        };
    },

    setupController() {
        this.controllerFor("application").set("indexRoute", false);
        if(this.get('session').get("currentUser")) {
            this.transitionTo("user");
            this.controllerFor("application").set("authenticatedUser", this.get('session.currentUser'));
        }
    }
});