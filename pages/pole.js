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

function Pole() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700 mb-8'>Pole</h1>
			<p className='text-base text-gray-500 mb-8'>
				Yay! You found the flag
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Now go check the achievement you just got
			</p>
			<Link href='/fun' passHref>
				<button className='btn'>Check achievements</button>
			</Link>
		</motion.section>
	);
}

Pole.title = 'Pole';

export default Pole;
