var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    birthDate: String,
    gender: String,
    email: String,
    cpf: String
}, {versionKey: false})

module.exports = mongoose.model("User", userSchema)