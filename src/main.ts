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
	error500: [Pages.ErrorPage, {
		title: '500',
		subtitle: '(Райан уже выехал на разборки)',
		linkTitle: 'Назад к чатам',
		navigateTo: 'chats',
	}],
	error404: [Pages.ErrorPage, {
		title: '404',
		subtitle: 'Страница не найдена',
		linkTitle: 'Назад к чатам',
		navigateTo: 'chats',
	}],
	chats: [Pages.ChatsPage],
	profile: [Pages.ProfilePage, {
		fields: [
			{
				labelText: 'Почта', type: 'email', name: 'email', value: 'blade_runner2049@yandex.ru',
			},
			{
				labelText: 'Логин', type: 'text', name: 'login', value: 'DeadInside',
			},
			{
				labelText: 'Имя', type: 'text', name: 'first_name', value: 'Иван',
			},
			{
				labelText: 'Фамилия', type: 'text', name: 'second_name', value: 'Бослинг',
			},
			{
				labelText: 'Имя в чате', type: 'text', name: 'display_name', value: 'DeadOutside',
			},
			{
				labelText: 'Телефон', type: 'text', name: 'phone', value: '+7(666)-666-66-66',
			},
		],
		disabled: true,
	}],
	profileChangeData: [Pages.ProfilePage, {
		fields: [
			{
				labelText: 'Почта', type: 'email', name: 'email', value: 'blade_runner2049@yandex.ru',
			},
			{
				labelText: 'Логин', type: 'text', name: 'login', value: 'DeadInside',
			},
			{
				labelText: 'Имя', type: 'text', name: 'first_name', value: 'Иван',
			},
			{
				labelText: 'Фамилия', type: 'text', name: 'second_name', value: 'Бослинг',
			},
			{
				labelText: 'Имя в чате', type: 'text', name: 'display_name', value: 'DeadOutside',
			},
			{
				labelText: 'Телефон', type: 'text', name: 'phone', value: '+7(666)-666-66-66',
			},
		],
		submitTitle: 'Сохранить',
		disabled: false,
	}],
	profileChangePassword: [Pages.ProfilePage, {
		fields: [
			{ labelText: 'Старый пароль', type: 'password', name: 'oldPassword' },
			{ labelText: 'Новый пароль', type: 'password', name: 'newPassword' },
			{ labelText: 'Повторите новый пароль', type: 'password', name: 'passwordAgain' },
		],
		submitTitle: 'Сохранить',
		disabled: false,
	}],
};

Object.entries(Components).forEach(([name, component]) => {
	Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
	// @ts-expect-error: different Types after updates. but still can be compared
	const [source, context] = pages[page];
	const container = document.getElementById('app')!;
	container.innerHTML = Handlebars.compile(source)(context);
}

// document.addEventListener('DOMContentLoaded', () => navigate('profile'));

document.addEventListener('click', (e) => {
	// @ts-expect-error: different Types after updates. but still can be compared
	const page = e.target.getAttribute('navigateTo');
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});
