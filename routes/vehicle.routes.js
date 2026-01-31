import express from "express";
import { rateLimiter } from "../middlewares/rateLimiter.middleware";
import { assignDriver, createVehicle, getVehicleById } from "../controllers/vehicle.controller";

router.post("/add",rateLimiter,createVehicle);
router.get("/id",getVehicleById);
router.patch("/assign-driver/:id",assignDriver );

export default router;