import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),
    firebaseApp: service(),

    beforeModel: function () {
        this._super(...arguments);
        return this.get('session').fetch().catch(function () {
        });
    },

    model() {
        return this.store.createRecord('user');
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);

        this.controller.set('user', this.controller.get('model'));
        // Set the state of hamburger menu
        let target = document.getElementsByClassName("navbar-burger")[0];
        if (target) {
            target.classList.add('is-active');
        }
    },

    actions: {
        addUser() {
            let user = this.controller.get('user');
            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(user.userEmail, user.userPassword)
                .then((newFirebaseUser) => {
                    // console.log('New Firebase User', newFirebaseUser);
                    user.set('userUID',newFirebaseUser.uid);
                
                    // Set the loggedInUser as the Recruiter for the new user
                    user.set('recruiter', this.controllerFor("user").get('authenticatedUser'));
                    user.set('userRID', this.controllerFor("user").get('authenticatedUser').get('userUID'));
                    // console.log("Saving New User: ", user);
                    user.save().then((savedUser) => {
                        // console.log('success on save', success);
                        alert("New User " + savedUser.userFullName + " Created!")
                        this.transitionTo("user");
                    })
                        .catch(error => {
                            alert('Error on save: ', error.message);
                            console.log(error);
                        })
                })
                .catch(error => {
                    alert('Error on creating a new user auth cred: ' + error.message);
                });
        },

        cancelUser() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
            this.transitionTo("user");
        },

        willTransition(transition) {

            let model = this.controller.get('model');

            if (model.get('hasDirtyAttributes')) {
                let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

                if (confirmation) {
                    model.rollbackAttributes();
                } else {
                    transition.abort();
                }
            }
        }
    },


});
