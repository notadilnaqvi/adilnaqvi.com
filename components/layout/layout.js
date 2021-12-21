import React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main className='pt-16 w-full tracking-wide flex justify-center min-h-[86vh]'>
				<div className='max-w-[1024px] w-full px-6 pb-16'>
					{children}
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}

export default Layout;
