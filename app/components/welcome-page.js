import Component from '@ember/component';

export default Component.extend({
    didRender() {
        var target = document.getElementById("user-sidebar");
    
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        if (target) target.classList.toggle('is-active');

        console.log("Toggled!");
    }
});
