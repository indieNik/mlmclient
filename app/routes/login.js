import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    session: service(),
    userService: service(),

    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
        });
    },

    setupController() {
        this.controllerFor("application").set("indexRoute", false);
        if(this.get('session').get("currentUser"))
            this.transitionTo("user");
    },

    actions: {

        signIn: function(provider) {
            alert(provider + " sign in disabled for now. Login using normal sign in form!")
        },

        signInWithPassword: function(provider, email, password) {
            if(provider == "password") {
                this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                }).then((data) => {    
                    this.get('userService').setupUserData(data);
                }).catch( error => {
                    alert("Error Fetching Session", error);
                });
            }
        },
        
        signOut: function() {
            this.get('session').close();
            this.transitionTo("login");
        }
    }
});