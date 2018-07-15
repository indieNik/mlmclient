import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('user');
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
        this.controller.set('loggedInUser', this.controllerFor("user").get('authenticatedUser'));

        // Set the state of hamburger menu and the Sidebar menu
        let menu = document.getElementsByClassName("navbar-burger")[0];
        let target = document.getElementsByClassName("column is-active")[0];
        if (target && menu) {
            target.classList.remove('is-active');
            menu.classList.remove('is-active');
        }
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
            let activeTabs = document.getElementsByClassName("users nav-pill is-active");
            [].forEach.call(activeTabs, activeTab => {
                activeTab.classList.remove("is-active");
            });
            let activeTab = document.getElementsByClassName(id)[0];
            activeTab.classList.add("is-active");
        }
    }
});
