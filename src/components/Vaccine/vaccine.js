var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var vaccineSchema = new Schema({
    name: String,
    manufacturer: String,
    validity: String,
    doseLot: String,
    dateVaccination: String,
    nextDose: String,
}, {versionKey: false})
module.exports = mongoose.model("Vaccine", vaccineSchema)