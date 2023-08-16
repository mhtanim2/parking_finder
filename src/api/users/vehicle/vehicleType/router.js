
const authenticator = require("../../../../middleware/authenticator");
const controller = require("./controller");
const express = require('express');

const vehicle_router = express.Router();

vehicle_router.post("/CreateVehicleTypes", authenticator,controller.CreateVehicleTypes);
vehicle_router.get("/FindVehicleTypes",authenticator ,controller.FindVehicleTypes);
vehicle_router.post("/UpdateVehicleTypes/:id", authenticator,controller.UpdateVehicleTypes);
vehicle_router.get("/DeleteVehicleType/:id", authenticator,controller.DeleteVehicleType);
vehicle_router.get("/VehicleTypeDropDown",authenticator,controller.VehicleTypeDropDown);
module.exports = vehicle_router;
