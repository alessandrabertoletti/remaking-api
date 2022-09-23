var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adressSchema = new Schema({
    city: String,
    state: String,
    street: String,
    district: String,
    zipCode: String
}, { versionKey: false })
module.exports = mongoose.model("Adress", adressSchema)