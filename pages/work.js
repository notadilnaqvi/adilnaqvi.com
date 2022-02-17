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

function Work() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700 mb-8'>Work</h1>
		</motion.section>
	);
}

Work.title = 'Work';

export default Work;
