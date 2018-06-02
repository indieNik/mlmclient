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
            this.transitionTo("index");
    },

    actions: {

        signIn: function(provider) {
            let _this = this;
            this.get('session').open('firebase', { provider: provider}).then(function(data) {
                let userInFirebase = _this.store.query('user', {
                    orderBy: 'userEmail',
                    equalTo: data.currentUser.email
                });
                userInFirebase.then(result => {
                    if(result.get("length") == 0) {
                        let newUser = _this.store.createRecord("user");
                        newUser.set("userName", data.currentUser.displayName);
                        newUser.set("userEmail", data.currentUser.email);
                        newUser.set("userImage", data.currentUser.photoURL);
                        newUser.set("isAdmin", false);
                        newUser.save();
                    }
                })
                _this.transitionTo("user");
            });
        },

        signInWithPassword: function(provider, email, password) {
            let _this = this;
            if(provider == "google") {
                this.get('session').open('firebase', {provider: 'google'}).then(function(data) {
                    let userInFirebase = _this.store.query('user', {
                        orderBy: 'userEmail',
                        equalTo: data.currentUser.email
                    });
                    userInFirebase.then(result => {
                        if(result.get("length") == 0) {
                            let newUser = _this.store.createRecord("user");
                            newUser.set("userName", data.currentUser.displayName);
                            newUser.set("userEmail", data.currentUser.email);
                            newUser.set("userImage", data.currentUser.photoURL);
                            newUser.set("isAdmin", false);
                            newUser.save();
                        }
                    })
                    _this.transitionTo("index");
                });
            }
            if(provider == "password") {
                this.get('session').open('firebase', {
                    provider: 'password',
                    email: email,
                    password: password
                }).then(function(data) {
                    _this.transitionTo("index");
                }).catch( error => {
                    alert("Invalid Password. Try again!");
                });
            };
        },
        
        signOut: function() {
            this.get('session').close();
            this.transitionTo("login");
        }
    }
});