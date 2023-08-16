
const authenticator = require("../../../../middleware/authenticator");
const controller = require("./controller");
const express = require('express');

const vehicle_info_router = express.Router();

vehicle_info_router.post("/CreateVehicle",authenticator,controller.CreateVehicle);
vehicle_info_router.post("/UpdateVehicle/:id",authenticator,controller.UpdateVehicle);
vehicle_info_router.get("/VehicleList",authenticator,controller.VehicleList);
vehicle_info_router.get("/DeleteVehicle/:id",authenticator,controller.DeleteVehicle);
vehicle_info_router.get("/VehicleOwnerInfo/:pageNo/:perPage/:searchKeyword",authenticator,controller.VehicleOwnerInfo);

module.exports = vehicle_info_router;
