import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world',
		branch: 'LCB'
	}
});

export default app;