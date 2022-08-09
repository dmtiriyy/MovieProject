
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
    count: 0,
    movies :{},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt('Сколько фильмов? ','');
        while (personalMovieDB.count =="" || personalMovieDB.count == null|| isNaN(personalMovieDB.count)){
            personalMovieDB.count = prompt('Сколько фильмов? ','');
        }
    },
    writeYourGenres: function (){
        let favouriteGenre;
        
        for(let i=1;i<=3; i++){
            favouriteGenre = prompt(`Ваш любимый жанр под номером ${i}`,'');

            if (favouriteGenre ==='' || favouriteGenre === null){
                console.log("Некоректные данные");
                i--;
            }else{

            personalMovieDB.genres[i-1]=favouriteGenre;
            }
                
        } 
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i+1} = это ${item}`);
        });
        
    },
     showMyDB: function(private){
        if (!private){
            console.log(personalMovieDB);
        }
    },
     rememberMyFilms : function(){
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
    },
     detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Not enough movies");
        } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30){
            console.log("classic human");
        } else if (personalMovieDB.count > 30){
            console.log('cinemaman');
        }else{
            console.log("Error");
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};







//detectPersonalLevel();
console.log(personalMovieDB);