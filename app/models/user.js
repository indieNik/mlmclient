import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

    userUID: DS.attr(),

    userFirstName: DS.attr(),
    userLastName: DS.attr(),
    userEmail: DS.attr(),
    userPassword: DS.attr(),
    userImage: DS.attr('string', { defaultValue: '/images/mlm-1200.png' }),
    userDob: DS.attr(),
    
    userPan: DS.attr(),
    userAdhaar: DS.attr(),
    userVoterId: DS.attr(),
    userLicenseID: DS.attr(),

    userBankName: DS.attr(),
    userBankAccountNo: DS.attr(),
    userBankIFSC: DS.attr(),
    userBankAccountType: DS.attr(),
    userBankBranchCode: DS.attr(),
    userBankBranch: DS.attr(),
    userBankCity: DS.attr(),
    
    userFatherName: DS.attr(),
    userMotherName: DS.attr(),
    userMaritalStatus: DS.attr('boolean', { defaultValue: false}),
    userSpouseName: DS.attr('string', { defaultValue: '' }),
    
    userMobile: DS.attr(),
    userAlternateMobile: DS.attr(),
    
    userCountry: DS.attr(),
    userState: DS.attr(),
    userCity: DS.attr(),
    userStreet: DS.attr(),
    userCurrentCountry: DS.attr(),
    userCurrentState: DS.attr(),
    userCurrentCity: DS.attr(),
    userCurrentStreet: DS.attr(),
    userIsAdmin: DS.attr('boolean', { defaultValue: false}),
    
    userFullName: computed('userFirstName', 'userLastName', function() {
        return `${this.get('userFirstName')} ${this.get('userLastName')}`;
    }),
});
