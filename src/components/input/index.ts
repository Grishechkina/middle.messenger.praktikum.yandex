import './input.scss';
import Block from '../../core/Block';
import inputTemplate from './input.hbs?raw';

interface IInputProps {
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

export class Input extends Block<IInputProps> {
	protected init(): void {
	}

	protected render(): string {
		return inputTemplate;
	}
}