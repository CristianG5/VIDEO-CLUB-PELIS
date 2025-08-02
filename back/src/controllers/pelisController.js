const pelisService = require("../services/pelisService")

module.exports = {
    getAllPelis : async (req, res ) => {
       // res.status(200).send("Proximamente listado de Peliculas")
       const pelis = await pelisService.getPelis();
       res.status(200).json(pelis)
    }
}