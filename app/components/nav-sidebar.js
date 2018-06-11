import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    session: service(),
    router: service(),
    init() {
        this._super(...arguments);
    },

    actions: {
        toggleSidebar: function() {
            var sideBarMenu = document.getElementById("user-sidebar");
            var burgerMenu = document.getElementsByClassName("navbar-burger")[0];
            if (sideBarMenu) sideBarMenu.classList.remove('is-active');
            if (burgerMenu) burgerMenu.classList.remove('is-active');
        },

        signOut: function() {
            this.get('session').close();
            this.get("router").transitionTo("login");
        }
        
    }
});
