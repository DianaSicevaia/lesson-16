console.log('Sample JavaScript #2 HW #16');

// #1

var userObj = {
    firstName: 'Говард',
    lastName: 'Лавкрафт',
    age: 33,
    fullName () {
        return userObj.firstName + ' ' + userObj.lastName;
    }
    
};

console.log(userObj);


// #2

console.log(userObj.fullName());


// #3

function defUpperStr(str) {
    return (str || 'Default text').toUpperCase();
}

console.log(defUpperStr('Зов Ктулху')); 
console.log(defUpperStr());

// #4

 function evenFn(n) {
     var arr = [];
     for (var i = 1; i <= n; i++) if (i % 2 === 0) arr.push(i)

     return arr;
 }


console.log(evenFn(10)); 
console.log(evenFn(15)); 
console.log(evenFn(20));


// #5

function weekFn(n) {
    var day = '' ;

    switch (n) {
        case 1: day = 'Понедельник'; break;
        case 2: day = 'Вторник'; break;
        case 3: day = 'Среда'; break;
        case 4: day = 'Четверг'; break;
        case 5: day = 'Пятница'; break;
        case 6: day = 'Суббота'; break;
        case 7: day = 'Воскресенье'; break;
        default: day = null;
    }

    return day;
}

console.log(weekFn(1)); // 'Понедельник'
console.log(weekFn(3)); // 'Среда'
console.log(weekFn(7)); // 'Воскресенье'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn('2')); // null

// #6

function ageClassification(n) {
    var age = n < 0 ? null : 
              n <= 24 ? 'детский возраст' : 
              n <= 44 ? 'молодой возраст' :
              n <= 65 ? 'средний возраст' :
              n <= 75 ? 'пожилой возраст' :
              n <= 90 ? 'старческий возраст' :
              n <= 122 ? 'долгожители' : null ;
    
    return age;
}
console.log('-1 :', ageClassification(-1)); // -1 : null
console.log('5 :', ageClassification(5)); // 5 : детский возраст
console.log('34 :', ageClassification(34)); // 34 : молодой возраст
console.log('50 :', ageClassification(50)); // 50 : средний возраст
console.log('65.1 :', ageClassification(65.1)); // 65.1 : пожилой возраст
console.log('80 :', ageClassification(80)); // 80 : старческий возраст
console.log('110 :', ageClassification(110)); // 110 : долгожители
console.log('130 :', ageClassification(130)); // 130 : null

console.log('Блок тестирования:');
console.log(1, ageClassification(-1) === null);
console.log(2, ageClassification(1) === 'детский возраст');
console.log(3, ageClassification(24) === 'детский возраст');
console.log(4, ageClassification(24.01) === 'молодой возраст');
console.log(5, ageClassification(44) === 'молодой возраст');
console.log(6, ageClassification(44.01) === 'средний возраст');
console.log(7, ageClassification(65) === 'средний возраст');
console.log(8, ageClassification(65.01) === 'пожилой возраст');
console.log(9, ageClassification(75) === 'пожилой возраст');
console.log(10, ageClassification(75.01) === 'старческий возраст');
console.log(11, ageClassification(90) === 'старческий возраст');
console.log(12, ageClassification(90.01) === 'долгожители');
console.log(13, ageClassification(122) === 'долгожители');
console.log(14, ageClassification(122.01) === null);
console.log(15, ageClassification(150) === null);

// #7

function oddFn(n) {
    var arr = [];
    var i = 0;

    while (i++ < n) if (i % 2 !== 0) arr.push(i);

    return arr;
}

console.log(oddFn(10)); // [1, 3, 5, 7, 9]
console.log(oddFn(15)); // [1, 3, 5, 7, 9, 11, 13, 15]
console.log(oddFn(20)); // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// #8

function mainFunc (a, b, callback) {
    if (callback && typeof callback === 'function') return callback(a, b);
    return false;
}

// cbRandom(a, b) – вычисляет и возвращает произвольное целое число в диапазоне между a и b включительно.
function cbRandom(a, b) {
    return Math.floor(Math.random () * (b - a + 1)) + a ;
}

// cbPow(a, b) – вычисляет и возвращает результат возведения числа a в степень b.
function cbPow(a, b) {
    return Math.pow (a, b);
}

// cbAdd(a, b) – вычисляет и возвращает сумму двух чисел a и b.
function cbAdd(a, b) {
    return a + b;
}

/*
 * mainFunc() должна возвращать результат работы переданной ей возвратной функции, например:
 * mainFunc(2, 5, cbRandom) → случайно от 2 до 5 включительно
 * mainFunc(10, 30, cbRandom) → случайно 10..30 включительно
 * mainFunc(2, 5, cbPow) → 32
 * mainFunc(2, 5, cbAdd) → 7
 * mainFunc(2, 5, 'not a func') → false
 */

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false