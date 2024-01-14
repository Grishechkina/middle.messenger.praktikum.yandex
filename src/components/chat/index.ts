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
