import './settingInput.scss';
import Block from '../../core/Block';
import settingInputTemplate from './settingInput.hbs?raw';

interface ISettingInputProps {
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

export class SettingInput extends Block<ISettingInputProps> {

    constructor(props) {
        super(props);
    }
	protected init(): void {
	}

	protected render(): string {
		return settingInputTemplate;
	}
}