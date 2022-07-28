const numberOfFilms = prompt('Сколько фильмов? ','');


const personalMovieDB = {
    count: numberOfFilms,
    movies :{},
    actors: {},
    genres: [],
    privat: false
};

console.log(personalMovieDB);
for(let i = 0; i<2; i++){
    const a = prompt('Last movie?', '');
    const b = prompt('Grade ? ', '');
    personalMovieDB.movies[a] = b;

if (a != '' && b != '' && a != null && b != null && a.length < 50){
    personalMovieDB.movies[a] = b;
    console.log('done');
}else{
    console.log('error');
    i--;
}

}
if (numberOfFilms < 10){
    console.log("Not enough movies");
} else if (numberOfFilms >=10 && numberOfFilms < 30){
    console.log("classic human");
} else if (numberOfFilms > 30){
    console.log('cinemaman');
}else{
    console.log("Error");
}