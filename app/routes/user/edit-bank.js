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
        return this.store.query('user', {
            orderBy: 'userUID',
            equalTo: localStorage.getItem("authenticatedUserUID")
        });
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);

        this.controller.set('user', this.controller.get('model.firstObject'));
    },

    actions: {
        updateUser() {
            let user = this.controller.get('user');
            user.set("userBankApprovalPending", true);
            user.save().then(() => {
                // console.log('success on save', success);
                alert("Your bank details have been sent for approval!")
                this.transitionTo("user.profile");
            })
            .catch(error => {
                alert('Error while saving User', error);
            });
        },

        cancelUser() {
            // rollbackAttributes() removes the record from the store
            // if the model 'isNew'
            // this.controller.get('model').rollbackAttributes();
            this.transitionTo("user");
        }  
    },

    
});
