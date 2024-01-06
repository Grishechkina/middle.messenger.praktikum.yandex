import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
	login: [Pages.LoginPage, {
		fields: [
			{ labelText: 'Логин', type: 'text', name: 'login' },
			{ labelText: 'Пароль', type: 'password', name: 'password' },
		],
		submitTitle: 'Войти',
		linkTitle: 'Нет аккаунта?',
		navigateToPage: 'registration',
		formTitle: 'Вход',
		navigateTo: 'registration',
	}],
	registration: [Pages.LoginPage, {
		fields: [
			{ labelText: 'Почта', type: 'email', name: 'email' },
			{ labelText: 'Логин', type: 'text', name: 'login' },
			{ labelText: 'Имя', type: 'text', name: 'first_name' },
			{ labelText: 'Фамилия', type: 'text', name: 'second_name' },
			{ labelText: 'Телефон', type: 'text', name: 'phone' },
			{ labelText: 'Пароль', type: 'password', name: 'password' },
			{ labelText: 'Пароль (ещё раз)', type: 'password', name: 'passwordAgain' },
		],
		submitTitle: 'Зарегистрироваться',
		linkTitle: 'Войти',
		navigateToPage: 'login',
		formTitle: 'Привет, незнакомец',
		navigateTo: 'login',
	}],
};

Object.entries(Components).forEach(([name, component]) => {
	Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
	// @ts-ignore
	const [source, context] = pages[page];
	const container = document.getElementById('app')!;
	container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

document.addEventListener('click', (e) => {
	// @ts-ignore
	const page = e.target.getAttribute('navigateTo');
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});
