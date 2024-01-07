import './chat.scss'
import Handlebars from 'handlebars'

export { default as Chat } from './chat.hbs?raw';


Handlebars.registerHelper('messages', () => {
	return [
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
			And fight for me?`
		},
		{
			my: false,
			read: true,
			time: '21:59',
			img: 'https://w.forfun.com/fetch/b2/b25665013f6f4500a51470dbc3b69f65.jpeg'
		},
		{
			my: true,
			read: true,
			time: '21:58',
			text: 'I dont f*cking know'
		},
		{
			my: false,
			read: false,
			time: '21:59',
			text: `'Cause I'm just Ken
			Anywhere else I'd be a ten
			Is it my destiny
			To live
			And die a life of blonde fragility?
			I'm just Ken
			Where I see love, she sees a friend
			What will it take for her to see
			The man behind the tan
			And fight for me?`
		}
		,
		{
			my: false,
			read: false,
			time: '21:59',
			text: `'Cause I'm just Ken
			Anywhere else I'd be a ten
			Is it my destiny
			To live
			And die a life of blonde fragility?
			I'm just Ken
			Where I see love, she sees a friend
			What will it take for her to see
			The man behind the tan
			And fight for me?`
		}
	]
})