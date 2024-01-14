import './chats.scss';
import Handlebars from 'handlebars';
import userAvatar from '../../assets/img/ava.png';

export { default as ChatsPage } from './chats.hbs?raw';

Handlebars.registerHelper('chats', () => [
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
]);
