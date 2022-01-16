import { useEffect, useMemo, useReducer } from 'react';
import '../styles/global.css';
import Layout from '../components/layout/layout';
import { Provider } from '../context';
import { addRoute, hydrateStore, initialState, reducer } from '../store';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const _routes = window.localStorage.getItem('routes');
		const _achievements = window.localStorage.getItem('achievements');

		const routes = _routes ? JSON.parse(_routes) : initialState.routes;
		const achievements = _achievements
			? JSON.parse(_achievements)
			: initialState.achievements;

		dispatch(hydrateStore({ routes, achievements }));
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
				<link rel='shortcut icon' href='/logo.ico' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}

export default MyApp;
