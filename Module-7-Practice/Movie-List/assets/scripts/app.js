const addMovieModal = document.getElementById('add-modal');
const addMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
const cancleAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancleAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const enrtryTextSection = document.getElementById('entry-text');

const movies = [];

const toggleMoveModal = () => {
    addMovieModal.classList.toggle('visible');
    backdrop.classList.toggle('visible');
};

const clearMovieInpt = () => {
    for (const userinout of userInputs) {
        userinout.value = '';
    }
};

const updateUI = () => {
    enrtryTextSection.style.display = movies.length === 0 ? 'block' : 'none';
};

const deleteMovieHandler = (movieId) => {
    let index = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        index++;
    }
    movies.splice(index, 1);
    console.log(movies);
    const movieList = document.getElementById('movie-list');
    movieList.children[index].remove();
};

const renderMovies = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating} / 5</p>
        </div>
    `;

    newMovieElement.addEventListener(
        'click',
        deleteMovieHandler.bind(null, id)
    );
    const movieList = document.getElementById('movie-list');
    movieList.append(newMovieElement);
};

const addMovieHandler = () => {
    const movieTitle = userInputs[0].value;
    const movieImageUrl = userInputs[1].value;
    const movieRating = userInputs[2].value;

    if (
        movieTitle.trim() === '' ||
        movieImageUrl.trim() === '' ||
        movieRating.trim() === '' ||
        movieRating < 1 ||
        movieRating > 5
    ) {
        alert('Invalid Inputs (* Movie Rating Between 1 to 5)');
        return;
    }

    const newMovie = {
        id: movies.length,
        title: movieTitle,
        imageUrl: movieImageUrl,
        rating: movieRating,
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMoveModal();
    clearMovieInpt();
    renderMovies(
        newMovie.id,
        newMovie.title,
        newMovie.imageUrl,
        newMovie.rating
    );
    updateUI();
};

addMovieButton.addEventListener('click', toggleMoveModal);
cancleAddMovieButton.addEventListener('click', toggleMoveModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
