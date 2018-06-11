import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    userService: service(),

    setupController() {
        // Set the state of hamburger menu
        let target = document.getElementsByClassName("navbar-burger")[0];
        if (target) {
            target.classList.remove('is-active');
        }
        this.controller.set('sessionUser', this.get('userService.currentLoggedInUser'));
    },

    actions: {
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
        }
    }
});
