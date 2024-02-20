import './chat.scss';
import Handlebars from 'handlebars';

export { default as Chat } from './chat.hbs?raw';

Handlebars.registerHelper('messages', () => [
	{
		my: false,
		read: true,
		time: '21:58',
		text: `'Cause I'm just Ken
			Anywhere else I'd be a ten
			Is it my destiny
			To live
			And die a life of blonde fragility?
			I'm just Ken
			Where I see love, she sees a friend
			What will it take for her to see
			The man behind the tan
			And fight for me?`,
	},
	{
		my: false,
		read: true,
		time: '21:59',
		img: 'https://i.blogs.es/337a95/just-ken/840_560.jpeg',
	},
	{
		my: true,
		read: true,
		time: '21:58',
		text: 'Leave me alone, pls',
	},
	{
		my: false,
		read: false,
		time: '21:59',
		text: `I wanna know what it’s like to love
				To be the real thing
				Is it a crime?
				Am I not hot
				When I'm in my feelings?
				And is my moment finally here or am I dreaming?
				I'm no dreamer`,
	},
	{
		my: false,
		read: false,
		time: '21:59',
		text: `Can you feel the Ken-ergy?
				Feels so real, my Ken-ergy
				Can you feel the Ken-ergy?
				Feels so real, my Ken-ergy
			`,
	},
]);


import './chats.scss';
import userAvatar from '../../assets/img/ava.png';
import Block from '../../core/Block';
import chatsTemplate from './chats.hbs?raw';


export class Chat extends Block<IChatProps> {
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
