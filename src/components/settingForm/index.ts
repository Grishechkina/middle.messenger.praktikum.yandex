import './settingForm.scss';
import Block from '../../core/Block';
import settingFormTemplate from './settingForm.hbs?raw';

interface ISettingFormProps {
    type: string;
    label: string,
    navigateTo: string;
    onClick: () => void,
    events: {
        click: () => void
    }
}

export class SettingForm extends Block<ISettingFormProps> {

	constructor(props) {
        super(props);
    }
	protected init(): void {
		this.props.events = {
			click: this.props.onClick,
		};
	}

	protected render(): string {
		return settingFormTemplate;
	}
}
