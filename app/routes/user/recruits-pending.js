import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.query('user', {
            orderBy: 'userRID',
            equalTo: localStorage.getItem("authenticatedUserUID")
        });
    },

    setupController() {
        this._super(...arguments);
        this.controllerFor("application").set("indexRoute", false);
        this.controller.set('loggedInUser', this.controllerFor("user").get('authenticatedUser'));

        let users = this.controller.get('model');
        let pendingRecruits = [];

        users.forEach (u => {
            if (!u.userIsRecruited) {
                pendingRecruits.push(u);
            }
        });

        this.controller.set('pendingRecruits', pendingRecruits);

        // Set the state of hamburger menu and the Sidebar menu
        let menu = document.getElementsByClassName("navbar-burger")[0];
        let target = document.getElementsByClassName("column is-active")[0];
        if (target && menu) {
            target.classList.remove('is-active');
            menu.classList.remove('is-active');
        }
    }
});
