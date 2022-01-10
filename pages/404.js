import { motion } from 'framer-motion';
import Link from 'next/link';

const variants = {
	initial: {
		opacity: 0,
		y: 8,
	},
	animate: {
		transition: {
			ease: [0.25, 0.1, 0.25, 1.0],
		},
		opacity: 1,
		y: 0,
	},
};

function Error404() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700'>Error 404</h1>
			<p className='text-base text-gray-500 mb-8'>Not Found</p>
			<p className='text-base text-gray-500 mb-8'>
				The requested page was not found
			</p>
			<Link href='/' passHref>
				<button className='bg-th-primary text-white px-3 py-1'>
					Go back home
				</button>
			</Link>
		</motion.section>
	);
}

Error404.title = '404 Not Found';

export default Error404;
