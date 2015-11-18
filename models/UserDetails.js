var mongoose = require('mongoose');

var UserDetailsSchema = new mongoose.Schema({
  email:String,
  username: String,
  password: String
});

mongoose.model('UserDetails', UserDetailsSchema);