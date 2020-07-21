import { Router } from "express";
import { HealthController } from "@controllers/HealthController";

const routes = Router();

routes.get("/", HealthController.healthCheck);

export default routes;
