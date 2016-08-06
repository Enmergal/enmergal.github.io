//if(B.clicked()) alert("Hello");
//var title = prompt('Каково «официальное» название JavaScript?', '');
//(title == 'EcmaScript') ? alert('Верно!') : alert('Не знаете? Ай-яй-яй!');
var login = prompt('Кто пришел?', '');
if (login == 'Админ') {
	var pass = prompt('Введите пароль:', '');
	if (pass == 'ЧСВ') alert('Добро пожаловать!');
	else if (pass == null) alert('Вход отменен');
	else alert('Пароль неверен');
}
else if (login == null) alert('Вход отменен');
else alert('Я вас не знаю!');