import React from 'react';
import Image from 'next/image';
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

function Home() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16 flex flex-row justify-between'
		>
			<p className='text-2xl text-gray-700 leading-10'>
				Hi, I am
				<br />
				<span className='text-th-secondary'>Adil Naqvi</span>,
				<br />
				a developer focussed
				<br />
				on crafting experiences
			</p>
			<div className='hidden md:block'>
				<Image
					src='https://dummyimage.com/160x160/dadada/dadada'
					width='160'
					height='160'
					layout='fixed'
					alt='Adil Naqvi'
				/>
			</div>
		</motion.section>
	);
}

Home.title = 'Adil Naqvi';

export default Home;
