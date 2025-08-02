const { Router } = require("express");
const pelisRouter = require("./pelisRoutes.js");

const router = Router();

router.use("/movies", pelisRouter)

module.exports = router;