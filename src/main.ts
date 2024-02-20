import * as Components from './components';
import { registerComponent } from './core/resgiterComponent';
import { navigate } from './core/navigate';

registerComponent('Button', Components.Button);
registerComponent('Form', Components.Form);
registerComponent('Input', Components.Input);
registerComponent('SettingInput', Components.SettingInput);
registerComponent('SettingForm', Components.SettingForm);
registerComponent('ChatInfo', Components.ChatInfo);

document.addEventListener('click', (e) => {
	// @ts-expect-error: different Types after updates. but still can be compared
	const page = e.target.getAttribute('navigateTo');
	if (page) {
		navigate(page);

		e.preventDefault();
		e.stopImmediatePropagation();
	}
});
