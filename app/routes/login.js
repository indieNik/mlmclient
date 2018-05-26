import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

    session: service(),

    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
            console.log("Failed to fetch session");
        });
    },

    actions: {

        signIn: function(provider) {
            let _this = this;
            this.get('session').open('firebase', { provider: provider}).then(function(data) {
                _this.set("authenticatedUser", data.currentUser);
                console.log("Session User:", data.currentUser);
            });
        },
        
        signOut: function() {
            this.get('session').close();
            console.log("Session Closed!")
            this.transitionTo("login");
        },

        displayNav() {
            // Get all "navbar-burger" elements
            var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {
    
                // Add a click event on each of them
                $navbarBurgers.forEach(function ($el) {
                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);
    
                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
                });
            }
        }
    }
});