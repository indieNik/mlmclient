import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),


    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
        });
    },

    setupController() {
        this.controllerFor("application").set("indexRoute", false);
        if(this.get('session.currentUser')) {
            this.controllerFor("application").set("authenticatedUser", this.get('session.currentUser'));
            this.controllerFor("user").set("authenticatedUser", this.get('session.currentUser'));
        } else {
                this.transitionTo("index"); // Unauthenticated Request
        }
    },

    actions: {

        signOut: function() {
            this.get('session').close();
            this.get("router").transitionTo("login");
        }
        
    }
});