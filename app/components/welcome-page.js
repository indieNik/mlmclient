import Component from '@ember/component';

export default Component.extend({
    didRender() {
        var target = document.getElementById("user-sidebar");
        if (target) target.classList.toggle('is-active');
    }
});
