import './profile.scss';
import Block from '../../core/Block';
import profileTemplate from './profile.hbs?raw';
import { IFormField } from '../../shared/interfaces';

export interface IProfilePageProps {
    formConfig: {
        fields: IFormField[];
        submitTitle?: string;
    }
    showChangeButton: boolean;
}

export class ProfilePage extends Block<IProfilePageProps> {
	constructor() {
		const isChangeData = window.location.pathname.includes('ChangeData');
		const isChangePassword = window.location.pathname.includes('ChangePassword');
		let props: IProfilePageProps;
		if (isChangeData) {
			props = {
				formConfig: {
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
				},
				showChangeButton: false,
			};
		} else if (isChangePassword) {
			props = {
				formConfig: {
					fields: [
						{ labelText: 'Старый пароль', type: 'password', name: 'oldPassword' },
						{ labelText: 'Новый пароль', type: 'password', name: 'newPassword' },
						{ labelText: 'Повторите новый пароль', type: 'password', name: 'passwordAgain' },
					],
					submitTitle: 'Сохранить',
				},
				showChangeButton: false,
			};
		} else {
			props = {
				formConfig: {
					fields: [
						{
							disabled: true, labelText: 'Почта', type: 'email', name: 'email', value: 'blade_runner2049@yandex.ru',
						},
						{
							disabled: true, labelText: 'Логин', type: 'text', name: 'login', value: 'DeadInside',
						},
						{
							disabled: true, labelText: 'Имя', type: 'text', name: 'first_name', value: 'Иван',
						},
						{
							disabled: true, labelText: 'Фамилия', type: 'text', name: 'second_name', value: 'Бослинг',
						},
						{
							disabled: true, labelText: 'Имя в чате', type: 'text', name: 'display_name', value: 'DeadOutside',
						},
						{
							disabled: true, labelText: 'Телефон', type: 'text', name: 'phone', value: '+7(666)-666-66-66',
						},
					],
				},
				showChangeButton: true,
			};
		}
		super(props);
	}

	protected render(): string {
		return profileTemplate;
	}
}
