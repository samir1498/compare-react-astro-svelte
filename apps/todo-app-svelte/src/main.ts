import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'todo-app-svelte',
  },
});

export default app;
