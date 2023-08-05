const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movies = [];

const showMovies = (filterTerm = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filterTerm
        ? movies
        : movies.filter((movie) => movie.info.title.includes(filterTerm));

    filteredMovies.forEach((movie) => {
        const movieItem = document.createElement('li');
        let text = movie.info.title + ' - ';

        for (const key in movie.info) {
            if (key !== 'title') {
                text += `${key} : ${movie.info[key]}`;
            }
        }
        movieItem.textContent = text;
        movieList.append(movieItem);
    });
};

const addMovieBtnHandler = () => {
    const movieTitle = document.getElementById('title').value;
    const extraInfoKey = document.getElementById('extra-key-name').value;
    const extraInfoValue = document.getElementById('extra-value').value;

    if (movieTitle === '' || extraInfoKey === '' || extraInfoValue === '') {
        return;
    }

    const newMovie = {
        info: {
            title: movieTitle,
            [extraInfoKey]: extraInfoValue,
        },
        id: Math.random(),
    };

    movies.push(newMovie);
    showMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    showMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieBtnHandler);
searchBtn.addEventListener('click', searchMovieHandler);
