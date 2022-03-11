import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useMemo, useReducer } from 'react';

import '@/styles/global.css';
import { Provider } from '@/context';
import Layout from '@/components/layout/layout';
import { addRoute, hydrateStore, initialState, reducer } from '@/store';

// Hello
// Here's the flag: https://adilnaqvi.com/pole
// Now shoo!

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [state, dispatch] = useReducer(reducer, initialState);

	// NOTE: The order of the following useEffects is important (found out the hard way)

	// Get data from local storage and hydrate the store on each render
	useEffect(() => {
		const _routes = window.localStorage.getItem('routes');
		const _pieces = window.localStorage.getItem('pieces');
		const _achievements = window.localStorage.getItem('achievements');

		const routes = _routes ? JSON.parse(_routes) : initialState.routes;
		const pieces = _pieces ? JSON.parse(_pieces) : initialState.pieces;
		const achievements = _achievements
			? JSON.parse(_achievements)
			: initialState.achievements;

		dispatch(hydrateStore({ routes, achievements, pieces }));
	}, []);

	// Add the current route to visited routes
	useEffect(() => {
		dispatch(addRoute(router.pathname));
	}, [router.pathname]);

	// Update the local storage whenever the store state changes
	useEffect(() => {
		const { routes, pieces, achievements } = state;

		window.localStorage.setItem('routes', JSON.stringify(routes));
		window.localStorage.setItem('pieces', JSON.stringify(pieces));
		window.localStorage.setItem(
			'achievements',
			JSON.stringify(achievements)
		);
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
