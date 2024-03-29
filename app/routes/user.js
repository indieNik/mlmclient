import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),

    beforeModel: function() {
        this._super(...arguments);
        return this.get('session').fetch().catch(function() {
        });
    },

    model() {
        return this.store.query('user', {
            orderBy: 'userUID',
            equalTo: localStorage.getItem("authenticatedUserUID")
        });
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
        if(this.get('session.currentUser')) {
            this.controller.set("authenticatedUser", this.controller.get('model').firstObject);
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