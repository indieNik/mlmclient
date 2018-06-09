import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    session: service(),
    firebaseApp: service(),

    beforeModel: function() {
        this._super(...arguments);
        return this.get('session').fetch().catch(function() {
        });
    },

    model() {
        return this.store.createRecord('user');
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);

        this.controller.set('user', this.controller.get('model'));

        // if(this.get('session.currentUser')) {

        //     let user = this.store.peekRecord('user', this.get('session.currentUser.uid'));
        //     if (user == null) {
        //         user = this.store.createRecord("user");
        //         user.set('id', this.get('session.currentUser.uid'));
        //         user.set('userName', this.get('session.currentUser.displayName'));
        //         user.set('userImage', this.get('session.currentUser.photoURL'));
        //         user.set('userEmail', this.get('session.currentUser.email'));
        //     }
        //     if(this.get('session.currentUser.email') === "admin@gmail.com") {
        //         this.set('session.currentUser.userIsAdmin', true); // This will go in as a checkbox in Actual User Add Form, This is temp!
        //     } else {
        //         this.set('session.currentUser.userIsAdmin', false);
        //     }
        //     this.controllerFor("application").set("authenticatedUser", user);
        //     this.controllerFor("user").set("authenticatedUser", user);
        // } else {
        //     this.transitionTo("index"); // Unauthenticated Request
        // }

        // Set the state of hamburger menu
        let target = document.getElementsByClassName("navbar-burger")[0];
        if (target) {
            target.classList.add('is-active');
        }
    },

    actions: {
        addUser() {
            let user = this.controller.get('user');
            let isAdmin = document.getElementById("is_admin").checked;
            console.log("Saving First User: ", user);
            
            user.set('userIsAdmin', isAdmin);
            user.set('userUID','');
            user.set('userImage','');
            user.set('userLastName','');
            user.set('userDob','');
            user.set('userPan','');
            user.set('userAdhaar','');
            user.set('userVoterId','');
            user.set('userLicenseID','');
            user.set('userFatherName','');
            user.set('userMotherName','');
            user.set('userMaritalStatus','');
            user.set('userSpouseName','');
            user.set('userMobile','');
            user.set('userAlternateMobile','');
            user.set('userState','');
            user.set('userCity','');
            user.set('userStreet','');

            console.log("Saving User: ", user);

            const auth = this.get('firebaseApp').auth();
            auth.createUserWithEmailAndPassword(user.userEmail, user.userPassword)
            .then(() => {
                user.save().then(success => {
                    console.log('success on save', success);
                })
                .catch(error => {
                    console.log('error on save', error);
                })
            })
            .catch(error => {
                alert(error.message);
            });
        },

        cancelUser() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
            this.transitionTo("user");
        }  
    },

    
});
