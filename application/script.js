const numberOfFilms = prompt('Сколько фильмов? ','');


const personalMovieDB = {
    count: numberOfFilms,
    movies :{},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Last movie?', '');
const c = prompt('Last movie?', '');
const b = prompt('Grade ? ', '');
const d = prompt('Grade ? ', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);