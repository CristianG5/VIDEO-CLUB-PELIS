const contenedor = document.getElementById("contenedor-peliculas");

$.getJSON("https://students-api.up.railway.app/movies", function (data) {
  data.forEach(pelicula => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("pelicula");
    tarjeta.innerHTML = `
      <img src="${pelicula.poster}" alt="${pelicula.title}">
      <h3>${pelicula.title} (${pelicula.year})</h3>
      <div class="overlay">
        <p><strong>Duración:</strong> ${pelicula.duration}</p>
        <p><strong>Director:</strong> ${pelicula.director}</p>
        <p><strong>Puntaje:</strong> ⭐ ${pelicula.rate}</p>
        <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
});

// const contenedor = document.getElementById("contenedor-peliculas");

// tempData.forEach(pelicula => {
//     const tarjeta = document.createElement("div");
//     tarjeta.classList.add("pelicula"); // importante para aplicar el CSS

//     tarjeta.innerHTML = `
//         <img src="${pelicula.poster}" alt="${pelicula.title}">
//         <h3>${pelicula.title} (${pelicula.year})</h3>
//         <div class="overlay">
//             <p><strong>Duración:</strong> ${pelicula.duration}</p>
//             <p><strong>Director:</strong> ${pelicula.director}</p>
//             <p><strong>Puntaje:</strong> ⭐ ${pelicula.rate}</p>
//             <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
//         </div>
//     `;

//     contenedor.appendChild(tarjeta);
// });
