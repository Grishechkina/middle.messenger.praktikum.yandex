import './error.scss';
import Block from '../../core/Block';
import errorTemplate from './error.hbs?raw';

export interface IErrorPageProps {
    title: string;
    subtitle: string;
    linkTitle: string;
    navigateTo: string;
}
export class ErrorPage extends Block<IErrorPageProps> {
	constructor() {
		const is500 = window.location.pathname.includes('500');
		let props: IErrorPageProps;
		if (is500) {
			props = {
				title: '500',
				subtitle: '(Райан уже выехал на разборки)',
				linkTitle: 'Назад к чатам',
				navigateTo: 'chats',
			};
		} else {
			props = {
				title: '404',
				subtitle: 'Страница не найдена',
				linkTitle: 'Назад к чатам',
				navigateTo: 'chats',
			};
		}
		super(props);
	}

	protected render(): string {
		return errorTemplate;
	}
}
