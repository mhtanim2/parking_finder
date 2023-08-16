const DataModel = require("../../common/vehicleInfoModel");
const CreateService = require("../../../services/common/CreateService");
const UpdateService = require("../../../services/common/UpdateService");
const DeleteService = require("../../../services/common/DeleteService");
const ListTwoJoinService = require("../../../services/common/ListTwoJoinService");

//Create Type
exports.CreateVehicle=async (req, res) => {
    let Result= await CreateService(req,DataModel)
    res.status(200).json(Result)
}



exports.UpdateVehicle=async (req, res) => {
    let Result=await UpdateService(req,DataModel)
    res.status(200).json(Result)
}

exports.DeleteVehicle=async(req,res)=>{
    let Result=await DeleteService(req,DataModel);
    res.status(200).json(Result)
}

exports.VehicleList=async (req, res) => {
    try {
        let Result=await DataModel.find();
        res.status(200).json({status:"success",data:Result});
    } catch (error) {
        res.status(200).json({status:"fail",data:error});
    }
}


exports.VehicleOwnerInfo=async (req, res) => {
    let SearchRgx = {"$regex": req.params.searchKeyword, "$options": "i"}

    let JoinStage1= {$lookup: {from: "usermodels", localField: "OwnerID", foreignField: "_id", as:"Vehicle_Owner"}}
    let JoinStage2= {$lookup: {from: "vehicletypes", localField: "TypeID", foreignField: "_id", as:"Vehicle_Type"}}
    let SearchArray=[{plateNo: SearchRgx},{"Vehicle_Owner.email": SearchRgx},{"Vehicle_Owner.userinfo.0.username":SearchRgx},{"Vehicle_Type.typeName":SearchRgx}]
    
    let Result=await ListTwoJoinService(req,DataModel,JoinStage1,JoinStage2,SearchArray);
    res.status(200).json(Result)
}