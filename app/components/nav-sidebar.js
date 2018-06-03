import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    session: service(),
    router: service(),

    init() {
        this._super(...arguments);
        if(this.get('session.currentUser')) {
            this.set("authenticatedUser", this.get('session.currentUser'));
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
