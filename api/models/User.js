/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	firstName: 'STRING',
    lastName: 'STRING',
    
    emailAddress: {
      type: 'email', // Email type will get validated by the ORM
      required: true
    }
    
  }

};
