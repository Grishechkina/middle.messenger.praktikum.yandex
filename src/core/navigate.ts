import * as Pages from '../pages';

const pages = {
	login: Pages.LoginPage,
	registration: Pages.LoginPage,
	chats: Pages.ChatsPage,
	error500: Pages.ErrorPage,
	error404: Pages.ErrorPage,
	profile: Pages.ProfilePage,
	profileChangeData: Pages.ProfilePage,
	profileChangePassword: Pages.ProfilePage,
};

export function navigate(page: string) {

	window.history.pushState('', '', page);

	const app = document.getElementById('app');

	const Component = pages[page];

	if (app) {
		app.innerHTML = '';
	}

	const component = new Component();

	app?.append(component.getContent()!);

}

window.onpopstate = () => {
	const app = document.getElementById('app');
	if (app) {
		app.innerHTML = `<nav class="app__navigation">
				<a href="login" navigateTo="login" class="app__link link">Логин</a>
				<a href="registration" navigateTo="registration" class="app__link link">Регистрация</a>
				<a href="chats" navigateTo="chats" class="app__link link">Чат</a>
				<a href="profile" navigateTo="profile" class="app__link link">Профиль</a>
				<a href="profileChangeData" navigateTo="profileChangeData" class="app__link link">Профиль смена данных</a>
				<a href="profileChangePassword" navigateTo="profileChangePassword" class="app__link link">Профиль смена пароля</a>
				<a href="error404" navigateTo="error404" class="app__link link">Ошибка 404</a>
				<a href="error500" navigateTo="error500" class="app__link link">Ошибка 500</a>
			</nav>`;
	}
};
