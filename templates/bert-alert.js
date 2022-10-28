import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.bertAlert.helpers({
  alert() { return Session.get( 'bertAlert' ); }
});
