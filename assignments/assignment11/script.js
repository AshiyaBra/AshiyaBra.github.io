const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";
    try{
        const response = await fetch(url);
        return await response.json();
    }catch(error){
        console.error('Error:', error);
    }
};

const displayMovies = async () =>{
    const movies = await getMovies();
    const movieList = document.getElementById("movies");
    movies.forEach((movie)=> {
        movieList.append(getMovieInfo(movie));
    });
};

const getMovieInfo = (movie) => {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.innerHTML = movie.title; 

    const director = document.createElement("p");
    director.innerHTML = `<strong>Director: </strong> ${movie.director}`;

    const actors = document.createElement("p");
    actors.innerHTML = `<strong>Actor: </strong> ${movie.actors}`;

    const year = document.createElement("p");
    year.innerHTML = `<strong>Year: </strong> ${movie.year}`;

    const genres = document.createElement("p");
    genres.innerHTML = `<strong>Genres: </strong> ${movie.genres}`;

    const description = document.createElement("p");
    description.innerHTML = `<strong>Description: </strong> ${movie.description}`;

    const img = document.createElement("img");
    img.src = `https://portiaportia.github.io/json/${movie.img}`;
    


    section.appendChild(h2);
    section.appendChild(director);
    section.appendChild(actors);
    section.appendChild(year);
    section.appendChild(genres);
    section.appendChild(description);
    section.appendChild(img);

    return section; 
};

window.onload = () => {
    displayMovies();
}