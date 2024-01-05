import Handlebars from 'handlebars';
import * as Components from './components/index';
import * as Pages from './pages';


const pages = {
  'login': [ Pages.LoginPage, {test: '123'} ],
};

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('login'));

