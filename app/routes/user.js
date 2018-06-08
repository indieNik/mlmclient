import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),


    beforeModel: function() {
        this._super(...arguments);
        return this.get('session').fetch().catch(function() {
        });
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
        if(this.get('session.currentUser')) {
            this.controllerFor("application").set("authenticatedUser", this.get('session.currentUser'));
            this.controllerFor("user").set("authenticatedUser", this.get('session.currentUser'));
        } else {
                this.transitionTo("index"); // Unauthenticated Request
        }

        // Set the state of hamburger menu
        let target = document.getElementsByClassName("navbar-burger")[0];
        if (target) {
            target.classList.add('is-active');
        }
    },

    actions: {

        signOut: function() {
            this.get('session').close();
            this.get("router").transitionTo("login");
        }
        
    }
});