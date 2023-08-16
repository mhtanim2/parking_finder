const mongoose = require('mongoose');
const DataSchema = mongoose.Schema({
    TypeID:{type:mongoose.Schema.Types.ObjectId},
    OwnerID:{type:mongoose.Schema.Types.ObjectId},
    plateNo: { type: String, unique: true },
    Description:{type:String},
    image:{type:String,default:"unavailable"},
    CreatedDate: { type: Date, default: Date.now() }
}, { versionKey: false });
const vehicleInfoModel = mongoose.model('vehicleinfo', DataSchema);
module.exports = vehicleInfoModel