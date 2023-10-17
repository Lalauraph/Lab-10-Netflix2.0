// La sección de Banner se muestra en función a un mapa que modela una película.
const bannerMovie = {
    title: "Lara Jean's Letters",
    rating: "4.0 rating",
    description: "To All the Boys I've Loved Before is a teen romance novel about young Lara Jean, a high school daydreamer who writes love letters to the boys she has crushes on. She never sends out the letters though, they're just for her to write so she can let out her feelings and move on from her crush.",
    image: "https://assets.teenvogue.com/photos/5e46a7331e3db100082692e5/16:9/w_1920%2C_c_limit/To_All_the_Boys__P.S._I_Still_Love_You_00_01_58_07.PNG"
};

// Llenar la sección de Banner con los datos de la película
const bannerSection = document.querySelector('.pelicula-destacada');
const bannerTitle = bannerSection.querySelector('.movie-title');
const bannerRating = bannerSection.querySelector('.movie-rating');
const bannerDescription = bannerSection.querySelector('.movie-description');
const bannerImage = bannerSection.querySelector('.movie-image');

//La sección de Recomendaciones y tendencia  se muestra en función a un array de objetos. 
//Cada objeto representa una película. El array debe tener mínimo 5 películas

// RECOMENDADAS
const recommendedMovies = [
    {
        title: "Clueless",
        image: "https://m.media-amazon.com/images/I/91+6LJTjUYL._AC_UF894,1000_QL80_.jpg",
    },
    {
        title: "Mamma Mia",
        image: "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg",
    },
    {
        title: "Mamma Mia",
        image: "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg",
    },
    {
        title: "Mamma Mia",
        image: "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg",
    },
    {
        title: "Mamma Mia",
        image: "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg",
    },
    {
        title: "Mamma Mia",
        image: "https://images.moviesanywhere.com/24b204384e43573f3d961c340d33108f/b90afbd0-c8d0-4fe4-9752-a51489480a05.jpg",
    },
];


//TENDENCIA
const trendingMovies = [
    {
        title: "The Notebook",
        image: "https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_.jpg",
    },
    {
        title: "Freaky Friday",
        image: "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
        title: "Freaky Friday",
        image: "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
        title: "Freaky Friday",
        image: "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    {
        title: "Freaky Friday",
        image: "https://m.media-amazon.com/images/M/MV5BYmU4NTk4OWYtMjE4My00MGVkLTgwY2EtZTZjN2YyOGFiMDQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    },
    
];


// Obtener contenedor de peliculas
const recommendedMoviesContainer = document.querySelector('#recommended-movies .scroll-horizontal');
const trendingMoviesContainer = document.querySelector('#trending-movies .scroll-horizontal');

// Función para crear elementos de película y agregarlos al contenedor
function createMovieElement(movie) {
    const movieElement = document.querySelector('.recomendacion').cloneNode(true);
    movieElement.querySelector('#movie-image').src = movie.image;
    return movieElement;
}

// Llena el contenedor de películas recomendadas con nuevas películas
recommendedMovies.forEach((movie) => {
    const newMovieElement = createMovieElement(movie);
    recommendedMoviesContainer.appendChild(newMovieElement);
});

// Llena el contenedor de películas en tendencia con nuevas películas
trendingMovies.forEach((movie) => {
    const newMovieElement = createMovieElement(movie);
    trendingMoviesContainer.appendChild(newMovieElement);
});

