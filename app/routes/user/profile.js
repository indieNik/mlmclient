import Route from '@ember/routing/route';

export default Route.extend({
    init() {
        var target = document.getElementById("user-sidebar");
    
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        if (target) target.classList.toggle('is-active');
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
