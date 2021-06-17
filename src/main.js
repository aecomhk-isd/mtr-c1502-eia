import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		show: 1
	}
});

export default app;