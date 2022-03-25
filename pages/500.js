import Link from 'next/link';
import { motion } from 'framer-motion';

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

function Error500() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700'>Error 500</h1>
			<p className='text-base text-gray-500 mb-8'>
				Internal Server Error
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Welp. This wasn't supposed to happen
			</p>
			<Link href='/' passHref>
				<button className='btn'>Go back home</button>
			</Link>
		</motion.section>
	);
}

Error500.title = '500 Internal Server Error';

export default Error500;
