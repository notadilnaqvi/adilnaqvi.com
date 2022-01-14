import React from 'react';
import Header from './header';
import Footer from './footer';
import Link from 'next/link';

function Layout({ children }) {
	return (
		<React.Fragment>
			<Header />
			<main className='pt-16 w-full tracking-wide flex justify-center min-h-[calc(100vh-120px)]'>
				<div className='max-w-[1024px] w-full px-6 pb-16'>
					{children}
				</div>
			</main>
			<Footer />
			<Link href='/achievements'>
				<a className='fixed right-8 bottom-0 w-8 h-10 bg-gradient-to-b from-[#FFD700] to-[#DAA520]'></a>
			</Link>
		</React.Fragment>
	);
}

export default Layout;
