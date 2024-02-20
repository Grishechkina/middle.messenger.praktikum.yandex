import './button.scss';
import Block from '../../core/Block';
import buttonTemplate from './button.hbs?raw';

interface IButtonProps {
    type: string;
    label: string,
    navigateTo: string;
    onClick: () => void,
    events: {
        click: () => void
    }
}

export class Button extends Block<IButtonProps> {
	protected init(): void {
		this.props.events = {
			click: this.props.onClick,
		};
	}

	protected render(): string {
		return buttonTemplate;
	}
}
