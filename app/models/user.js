import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({

    userUID: DS.attr(),

    userFirstName: DS.attr(),
    userLastName: DS.attr(),
    userEmail: DS.attr(),
    userPassword: DS.attr(), //To-Do: Need to use a Password hash like md5
    userImage: DS.attr('string', { defaultValue: '/images/mlm-1200.png' }),
    userDob: DS.attr(),
    
    userPan: DS.attr(),
    userAdhaar: DS.attr(),
    userVoterId: DS.attr(),
    userLicenseID: DS.attr(),

    userBankName: DS.attr(),
    userBankAccountNo: DS.attr(),
    userBankIFSC: DS.attr(),
    userBankAccountType: DS.attr('string', { defaultValue: 'Current' }),
    userBankBranchCode: DS.attr(),
    userBankBranch: DS.attr(),
    userBankCity: DS.attr(),
    userNewBankName: DS.attr(),
    userNewBankAccountNo: DS.attr(),
    userNewBankIFSC: DS.attr(),
    userNewBankAccountType: DS.attr('string', { defaultValue: 'Current' }),
    userNewBankBranchCode: DS.attr(),
    userNewBankBranch: DS.attr(),
    userNewBankCity: DS.attr(),
    
    userFatherName: DS.attr(),
    userMotherName: DS.attr(),
    userMaritalStatus: DS.attr('boolean', { defaultValue: false}),
    userSpouseName: DS.attr('string', { defaultValue: '' }),
    
    userMobile: DS.attr(),
    userAlternateMobile: DS.attr(),
    userNewMobile: DS.attr(),
    userNewAlternateMobile: DS.attr(),
    
    userCountry: DS.attr(),
    userState: DS.attr(),
    userCity: DS.attr(),
    userStreet: DS.attr(),
    userCurrentCountry: DS.attr(),
    userCurrentState: DS.attr(),
    userCurrentCity: DS.attr(),
    userCurrentStreet: DS.attr(),

    userIsAdmin: DS.attr('boolean', { defaultValue: false}),
    userIsRecruited: DS.attr('boolean', { defaultValue: false}), // To track if User Is Recruited or Approved to use the system
    userBankApprovalPending: DS.attr('boolean', { defaultValue: false}), // To track if User has requested to update bank details
    userMobileApprovalPending: DS.attr('boolean', { defaultValue: false}), // To track if User has requested to update Mobile details

    userFullName: computed('userFirstName', 'userLastName', function() {
        return `${this.get('userFirstName')} ${this.get('userLastName')}`;
    }),
});
