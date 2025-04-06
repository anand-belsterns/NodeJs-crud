var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

console.log("UserSchema ------->>", UserSchema);

mongoose.model("User", UserSchema);

module.exports = mongoose.model("User");
