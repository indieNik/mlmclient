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
        toggleSidebar: function() {
            var target = document.getElementById("user-sidebar");
            if (target) target.classList.toggle('is-active');
            console.log("Toggle Sidebar");
        },

        toggleTab(id) {
            let tabs = document.getElementsByClassName("info-tabs");
            [].forEach.call(tabs, tab => {
                if(tab.id == id) {
                    tab.classList.remove("hide-div");
                } else {
                    tab.classList.add("hide-div");
                }
            });
            let activeTabs = document.getElementsByClassName("nav-pill is-active");
            [].forEach.call(activeTabs, activeTab => {
                activeTab.classList.remove("is-active");
            });
        },

        signOut: function() {
            this.get('session').close();
            this.get("router").transitionTo("login");
        }
        
    }
});
