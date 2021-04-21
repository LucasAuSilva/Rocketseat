import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const settingsController = new SettingsController();
const usersController = new UsersController()
const routes = Router();

/**
 * Types of parameters
 * Routes Params => params of routes
 * http://localhost:3000/settings/1
 * Query Params => filter and search
 * http://localhost:3000/settings/1?search=algumacoisa
 * 
 * Body params => { } objects, information, data
 */

routes.post("/settings", settingsController.create)
routes.post("/users", usersController.create)


export { routes };