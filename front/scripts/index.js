const axios = require("axios");
const renderCards = require("./renderCards"); // esta es la función que dibuja las tarjetas

const getMovies = async () => {
  try {
    const response = await axios.get("https://students-api.up.railway.app/movies");
    renderCards(response.data); // le pasamos la data a renderCards
  } catch (error) {
    console.error("Error al obtener los datos:", error);
  }
}

getMovies();
