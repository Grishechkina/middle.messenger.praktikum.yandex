import './chats.scss';
import userAvatar from '../../assets/img/ava.png';
import Block from '../../core/Block';
import chatsTemplate from './chats.hbs?raw';

export interface IChat {
	name: string;
	avatar: string;
	lastMessage: string;
	time: string;
	unreadCount?: number;
}
export interface IChatsPageProps {
	chats: IChat[]
}
export class ChatsPage extends Block<IChatsPageProps> {
	constructor() {
		const props = {
			chats: [
				{
					name: 'ken-1',
					avatar: userAvatar,
					lastMessage: 'wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick?',
					time: '15:12',
					unreadCount: 2,
				},
				{
					name: 'ken-2', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '06:12',
				},
				{
					name: 'ken-3', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '20:12', unreadCount: 5,
				},
				{
					name: 'ken-1',
					avatar: userAvatar,
					lastMessage: 'wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick?',
					time: '15:12',
					unreadCount: 2,
				},
				{
					name: 'ken-2', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '06:12',
				},
				{
					name: 'ken-3', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '20:12', unreadCount: 5,
				},
				{
					name: 'ken-1',
					avatar: userAvatar,
					lastMessage: 'wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick?',
					time: '15:12',
					unreadCount: 2,
				},
				{
					name: 'ken-2', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '06:12',
				},
				{
					name: 'ken-3', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '20:12', unreadCount: 5,
				},
				{
					name: 'ken-1',
					avatar: userAvatar,
					lastMessage: 'wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick? wanna toothpick?',
					time: '15:12',
					unreadCount: 2,
				},
				{
					name: 'ken-2', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '06:12',
				},
				{
					name: 'ken-3', avatar: userAvatar, lastMessage: 'wanna toothpick?', time: '20:12', unreadCount: 5,
				},
			]
		}

		super(props);
	}

	protected render(): string {
		return chatsTemplate;
	}
}
