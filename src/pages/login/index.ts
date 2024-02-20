import './login.scss';
import Block from '../../core/Block';
// import { navigate } from '../../core/navigate';
import loginTemplate from './login.hbs?raw';
import { IFormField } from '../../shared/interfaces';

export interface ILoginPageProps {
	formConfig: {fields: IFormField[];
		submitTitle: string;
		linkTitle: string;
		navigateToPage: string;
		navigateTo: string;
	}

    formTitle: string;
}
export class LoginPage extends Block<ILoginPageProps> {
	constructor() {
		const isLogin = window.location.pathname.includes('login');
		let props: ILoginPageProps;
		if (isLogin) {
			props = {
				formConfig: {
					fields: [
						{ labelText: 'Логин', type: 'text', name: 'login' },
						{ labelText: 'Пароль', type: 'password', name: 'password' },
					],
					submitTitle: 'Войти',
					linkTitle: 'Нет аккаунта?',
					navigateToPage: 'registration',
					navigateTo: 'registration',
				},
				formTitle: 'Вход',
			};
		} else {
			props = {
				formConfig: {
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
					navigateTo: 'login',
				},
				formTitle: 'Привет, незнакомец',
			};
		}
		super(props);
	}

	protected render(): string {
		return loginTemplate;
	}
}
