import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo, useReducer } from 'react';

import '@/styles/global.css';
import { Provider } from '@/context';
import Layout from '@/components/layout/layout';
import { addRoute, hydrateStore, initialState, reducer } from '@/store';

// Hello
// Here's the flag: https://adilnaqvi.com/hacked
// Now shoo!

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const _routes = window.localStorage.getItem('routes');
		const _achievements = window.localStorage.getItem('achievements');
		const _pieces = window.localStorage.getItem('pieces');

		const routes = _routes ? JSON.parse(_routes) : initialState.routes;
		const achievements = _achievements
			? JSON.parse(_achievements)
			: initialState.achievements;
		const pieces = _pieces ? JSON.parse(_pieces) : initialState.pieces;

		dispatch(hydrateStore({ routes, achievements, pieces }));
	}, []);

	useEffect(() => {
		dispatch(addRoute(router.pathname));
	}, [router.pathname]);

	useEffect(() => {
		for (const key in initialState) {
			window.localStorage.setItem(key, JSON.stringify(state[key]));
		}
	}, [state]);

	const value = useMemo(() => {
		return { state, dispatch };
	}, [state, dispatch]);

	return (
		<Provider value={value}>
			<Head>
				<title>{Component.title}</title>
				<link rel='shortcut icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
