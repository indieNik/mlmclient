import Route from '@ember/routing/route';

export default Route.extend({

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
            let activeTab = document.getElementsByClassName(id)[0];
            activeTab.classList.add("is-active");
        }
    }
});
