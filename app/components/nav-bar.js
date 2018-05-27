import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({

    session: service(),
    router: service(),

    beforeModel: function() {
        return this.get('session').fetch().catch(function() {
        });
    },

    actions: {

        signOut: function() {
            this.get('session').close();
            this.get("router").transitionTo("login");
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
