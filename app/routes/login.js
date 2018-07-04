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
                    this.store.query('user', {
                        orderBy: 'userUID',
                        equalTo: data.uid
                    }).then( loggedInUserData => {
                        if(loggedInUserData.firstObject.userIsRecruited) {
                            if (typeof(Storage) !== "undefined") {
                                // Store
                                localStorage.setItem("authenticatedUserUID", data.uid);
                                this.transitionTo("user");
                            } else {
                                alert("TODO: Cannot continue since no support for browser storage!");
                            }
                        } else {
                            alert("User not Approved yet, hence not allowed to login!");
                            this.get('session').close();
                            this.transitionTo("login");
                        }
                    })
                }).catch( error => {
                    alert(error.message);
                });
            }
        },
        
        signOut: function() {
            this.get('session').close();
            this.transitionTo("login");
        }
    }
});