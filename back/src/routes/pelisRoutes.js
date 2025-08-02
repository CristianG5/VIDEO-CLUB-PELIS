const { Router } = require("express");
const pelisController = require("../controllers/pelisController")


const pelisRouter = Router();

pelisRouter.get("/", pelisController.getAllPelis)

module.exports = pelisRouter;