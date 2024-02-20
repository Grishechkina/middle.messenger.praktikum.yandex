import './chatInfo.scss';
import Block from '../../core/Block';
import chatInfoTemplate from './chatInfo.hbs?raw';
import { IChat } from '../../pages/chats';

export class ChatInfo extends Block<IChat> {

    constructor(props) {
        super(props);
    }
	protected init(): void {
		// this.props.events = {
		// 	click: this.props.onClick,
		// };
	}

	protected render(): string {
		return chatInfoTemplate;
	}
}
