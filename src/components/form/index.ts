import './form.scss';
import Block from '../../core/Block';
import formTemplate from './form.hbs?raw';

interface IFormProps {
    // type: string;
    // label: string,
    // navigateTo: string;
    // onClick: () => void,
    // events: {
    //     click: () => void
    // }
    navigateTo: string;
    linkTitle: string;
}

export class Form extends Block<IFormProps> {
	protected init(): void {
	}

	protected render(): string {
		return formTemplate;
	}
}
