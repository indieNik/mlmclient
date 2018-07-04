import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),

    actions: {
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
        },

        toggleTabInner(id) {
            let tabs = document.getElementsByClassName("user-list info-tabs");
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
    
        approveUser(id) {
            this.get('store').findRecord('user', id).then(user => {
                user.set("userIsRecruited", true);
                user.save().then( data => {
                    console.log("User saved. Approval statue: ", data.userIsRecruited);
                });
            });
        },

        disApproveUser(id) {
            this.get('store').findRecord('user', id).then(user => {
                user.set("userIsRecruited", false);
                user.save().then( data => {
                    console.log("User saved. Approval statue: ", data.userIsRecruited);
                });
            });
        }
    }
});
