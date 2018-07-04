import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('user');
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
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
        },

        toggleAccordion() {
            let activeTabs = document.getElementsByClassName("accordion is-active");
            if(activeTabs[0] && activeTabs[0].isEqualNode(event.target.parentNode)) {
                event.target.parentNode.classList.remove("is-active");
            } else {
                if(activeTabs[0]) {
                    activeTabs[0].classList.remove("is-active");
                }
                event.target.parentNode.classList.add("is-active");
            }
        }
    }
});
