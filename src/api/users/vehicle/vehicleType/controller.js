const DataModel = require("../../common/vehicleTypeModel");
const DropDownService = require("../../../services/common/DropDownService");
//Create Type
exports.CreateVehicleTypes = async (req, res) => {
    try {
        PostBody = req.body;
        let Result = await DataModel.create(PostBody)
        res.status(200).json({ status: "success", data: Result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString })
    }
}

exports.FindVehicleTypes = async (req, res) => {
    try {
        let Result = await DataModel.find()
        res.status(200).json({ status: "success", data: Result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString })
    }
}


exports.UpdateVehicleTypes = async (req, res) => {
    try {
        let id = req.params.id;
        let PostBody = req.body;
        let Result = await DataModel.updateOne({ _id: id }, PostBody);
        res.status(200).json({ status: "success", data: Result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString })
    }
}


exports.DeleteVehicleType = async (req, res) => {
    try {
        let id = req.params.id;
        let Result = await DataModel.deleteMany({ _id: id });
        res.status(200).json({ status: "success", data: Result })
    }
    catch (e) {
        res.status(200).json({ status: "fail", data: e.toString })
    }
}

exports.VehicleTypeDropDown=async(req,res)=>{
    let Result= await DropDownService(req,DataModel,{_id:1,Name:1})
    res.status(200).json(Result)
}