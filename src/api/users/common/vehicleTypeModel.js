const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    typeName: { type: String, unique: true },
    CreatedDate: { type: Date, default: Date.now() }
}, { versionKey: false });
const vehicleTypeModel = mongoose.model('vehicleType', DataSchema);
module.exports = vehicleTypeModel;