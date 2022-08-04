let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов? ','');
    while (numberOfFilms =="" || numberOfFilms == null|| isNaN(numberOfFilms)){
        numberOfFilms = prompt('Сколько фильмов? ','');
    }
}
start();
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания
const personalMovieDB = {
    count: numberOfFilms,
    movies :{},
    actors: {},
    genres: [],
    privat: false
};
    
console.log(personalMovieDB);
function writeYourGenres(){
    let favouriteGenre;
    for(let i=1;i<=3; i++){
        favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`,'');
        personalMovieDB.genres[i-1]=favouriteGenre;
    }
    
}
writeYourGenres();
function showMyDB(private){
    if (!private){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);
function rememberMyFilms(){
    for(let i = 0; i<2; i++){
        const a = prompt('Last movie?', '').trim();
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
}
rememberMyFilms();

function detectPersonalLevel(){
    if (numberOfFilms < 10){
        console.log("Not enough movies");
    } else if (numberOfFilms >=10 && numberOfFilms < 30){
        console.log("classic human");
    } else if (numberOfFilms > 30){
        console.log('cinemaman');
    }else{
        console.log("Error");
    }
}
//detectPersonalLevel();
console.log(personalMovieDB);