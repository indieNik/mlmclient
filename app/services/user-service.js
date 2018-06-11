import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({

    session: service(),
    store: service(),
    router: service(),

    userLoggedIn: false,
    userIsAdmin: false,
    currentLoggedInUser: null,

    init() {
        this._super(...arguments);
    },

    setupUserData(data) {
        // console.log('Got Data', data);
        // console.log('Check:', this.get('session.isAuthenticated'));
        if(this.get('session.isAuthenticated')) {
            this.store.query('user', {
                orderBy: 'userEmail',
                equalTo: data.currentUser.email
            }).then( userObj => {
                this.set('currentLoggedInUser', userObj.firstObject);
                // console.log('Saved Logged USer', this.get('currentLoggedInUser'));
                this.get('router').transitionTo("user");
            });
        } else {
            alert("Error on setting session");
        }
    },

    setCurrentUser(userObj) {
        // console.log("Setting Logged In User Data");
        this.set('currentLoggedInUSer', userObj);
    }
});
