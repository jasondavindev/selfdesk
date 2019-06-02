import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../components/Tela1.vue'),
		},
		{
			path: '/turmas',
			name: 'turmas',
			component: () => import('../components/Tela3.vue'),
		},
	],
});
