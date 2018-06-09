import DS from 'ember-data';

export default DS.Model.extend({

    userUID: DS.attr(),
    userEmail: DS.attr(),
    userImage: DS.attr(),
    userPassword: DS.attr(),
    userFirstName: DS.attr(),
    userLastName: DS.attr(),
    userDob: DS.attr(),
    userPan: DS.attr(),
    userAdhaar: DS.attr(),
    userVoterId: DS.attr(),
    userLicenseID: DS.attr(),
    userFatherName: DS.attr(),
    userMotherName: DS.attr(),
    userMaritalStatus: DS.attr(),
    userSpouseName: DS.attr(),
    userMobile: DS.attr(),
    userAlternateMobile: DS.attr(),
    userState: DS.attr(),
    userCity: DS.attr(),
    userStreet: DS.attr(),
    userIsAdmin: DS.attr('boolean')
    
});
