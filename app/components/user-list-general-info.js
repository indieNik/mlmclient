import Component from '@ember/component';

export default Component.extend({
    actions: {
        toggleAccordion(id) {
            // let activeTabs = document.getElementsByClassName("user-list-general-info accordion is-active");
            // if(activeTabs[0] && activeTabs[0].isEqualNode(event.target.parentNode)) {
            //     event.target.parentNode.classList.remove("is-active");
            // } else {
            //     if(activeTabs[0]) {
            //         activeTabs[0].classList.remove("is-active");
            //     }
            //     event.target.parentNode.classList.add("is-active");
            // }
            if(this.get('toggleMe') == id) {
                this.set('toggleMe', false);
            } else {
                this.set('toggleMe', false);
                this.set('toggleMe', id);
            }
        }
    }
});
