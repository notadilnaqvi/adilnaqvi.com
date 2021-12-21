import { useMemo, useReducer } from 'react';
import '../styles/global.css';
import Layout from '../components/layout/layout';
import { Provider } from '../context';
import { initialState, reducer } from '../store';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const [state, dispatch] = useReducer(reducer, initialState);

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
