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

function Error418() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700'>Error 418</h1>
			<p className='text-base text-gray-500 mb-8'>I&apos;m a teapot</p>
			<p className='text-base text-gray-500 mb-8'>
				The requested entity body is short and stout. Tip me over and
				pour me out.
			</p>
			<Link href='/' passHref>
				<button className='btn'>Go back home</button>
			</Link>
			<div className='mt-8'>
				<a
					href='https://save418.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='lnk'
				>
					What is this error?
				</a>
			</div>
		</motion.section>
	);
}

Error418.title = "418 I'm a teapot";

export default Error418;
