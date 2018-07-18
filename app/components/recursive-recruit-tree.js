import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    actions: {
        displayRecruitsTree(user) {
            console.log("Event Target", event.target);
            if(event.target.classList.contains("is-success")) {
                // Hide the successive div Element
                // Change the colo and title of button
                event.target.classList.remove("is-success");
                event.target.classList.add("is-warning");
                event.target.innerHTML = "- " + user.userFullName + "\'s Recruits";
                this.set('showRecruits', true);
            } else if(event.target.classList.contains("is-warning")) {
                event.target.classList.remove("is-warning");
                event.target.classList.add("is-success");
                event.target.innerHTML = "+ " + user.userFullName + "\'s Recruits";
                this.set('showRecruits', false);
            }
        }
    }
});
