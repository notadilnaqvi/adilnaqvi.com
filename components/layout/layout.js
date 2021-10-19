import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main className='w-full flex justify-center min-h-[93vh] py-4'>
				<div className='max-w-4xl w-full'>{children}</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
