import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "./repositories/SettingsRepository";

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

routes.post("/settings", async (req, res) => {
    const { chat, username } = req.body;

    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return res.json(settings)
})

export { routes };