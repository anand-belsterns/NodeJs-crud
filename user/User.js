var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String
});
mongoose.model('User', UserSchema);

console.log("mongoose ---------->>", mongoose);

module.exports = mongoose.model('User');
module.exports = User;