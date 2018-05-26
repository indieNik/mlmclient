import DS from 'ember-data';

export default DS.Model.extend({

    userName: DS.attr(),
    userEmail: DS.attr(),
    userImage: DS.attr(),
    isAdmin: DS.attr('boolean')
    
});
