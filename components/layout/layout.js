import React from 'react';
import Link from 'next/link';

import Header from './header';
import Footer from './footer';

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
				<a className='fixed right-8 -bottom-2 w-6 h-10 bg-[#DAA520] hover:-translate-y-1 transition duration-200 ease-in-out flex justify-center pt-[6px]'>
					<svg
						width='18'
						height='16'
						viewBox='0 0 18 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M5.22369 8.02189C4.72566 6.93161 4.47665 5.68317 4.47665 4.27657H1.89228V5.24571C1.89228 5.77066 2.21028 6.3158 2.84628 6.88113C3.48227 7.44646 4.27474 7.82671 5.22369 8.02189ZM16.1063 5.24571V4.27657H13.5219C13.5219 5.68317 13.2729 6.93161 12.7749 8.02189C13.7238 7.82671 14.5163 7.44646 15.1523 6.88113C15.7883 6.3158 16.1063 5.77066 16.1063 5.24571ZM17.3985 3.95353V5.24571C17.3985 5.72355 17.2588 6.20476 16.9795 6.68932C16.7002 7.17389 16.3233 7.61135 15.8489 8.0017C15.3744 8.39204 14.7922 8.72014 14.1024 8.98598C13.4126 9.25182 12.6874 9.40156 11.9269 9.43521C11.6442 9.79864 11.3245 10.1183 10.9679 10.3943C10.7121 10.6231 10.5354 10.867 10.4379 11.1262C10.3403 11.3853 10.2915 11.6864 10.2915 12.0297C10.2915 12.3931 10.3941 12.6993 10.5994 12.9483C10.8046 13.1974 11.1327 13.3219 11.5837 13.3219C12.0884 13.3219 12.5377 13.475 12.9314 13.7812C13.3251 14.0874 13.5219 14.4727 13.5219 14.9371V15.5832C13.5219 15.6774 13.4916 15.7548 13.4311 15.8154C13.3705 15.8759 13.2931 15.9062 13.1989 15.9062H4.79969C4.70547 15.9062 4.62808 15.8759 4.5675 15.8154C4.50693 15.7548 4.47665 15.6774 4.47665 15.5832V14.9371C4.47665 14.4727 4.6735 14.0874 5.06722 13.7812C5.46093 13.475 5.91016 13.3219 6.41492 13.3219C6.86584 13.3219 7.19394 13.1974 7.3992 12.9483C7.60447 12.6993 7.70711 12.3931 7.70711 12.0297C7.70711 11.6864 7.65831 11.3853 7.56073 11.1262C7.46314 10.867 7.28647 10.6231 7.03073 10.3943C6.67403 10.1183 6.35435 9.79864 6.07169 9.43521C5.31118 9.40156 4.58601 9.25182 3.89618 8.98598C3.20634 8.72014 2.62418 8.39204 2.14971 8.0017C1.67523 7.61135 1.29835 7.17389 1.01905 6.68932C0.739748 6.20476 0.600098 5.72355 0.600098 5.24571V3.95353C0.600098 3.68432 0.694319 3.4555 0.882763 3.26706C1.07121 3.07861 1.30003 2.98439 1.56924 2.98439H4.47665V2.01525C4.47665 1.57107 4.63481 1.19081 4.95112 0.874498C5.26744 0.558182 5.64769 0.400024 6.09188 0.400024H11.9067C12.3509 0.400024 12.7311 0.558182 13.0475 0.874498C13.3638 1.19081 13.5219 1.57107 13.5219 2.01525V2.98439H16.4293C16.6986 2.98439 16.9274 3.07861 17.1158 3.26706C17.3043 3.4555 17.3985 3.68432 17.3985 3.95353Z'
							fill='white'
						/>
					</svg>
				</a>
			</Link>
		</React.Fragment>
	);
}

export default Layout;
