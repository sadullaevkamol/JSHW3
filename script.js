var a = +prompt('Введите первое число');
var b = +prompt('Введите второе число');
var c = +prompt('Введите третье число')

if( a > c && a < b  || a > b && a < c) {
    alert( a + ' среднее число')
}else if(b > a && b < c || b > c && b < a) {
    alert(b + ' среднее число')
}else if (c > a && c < b || c > b && c < a) {
    alert(c + ' среднее число')
}else {
    alert('Вы ввели не цифру')
}