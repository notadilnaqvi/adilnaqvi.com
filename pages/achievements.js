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

function Achievements() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700 mb-8'>Achievements</h1>
			<p className='text-base text-gray-500 mb-8'>
				Hello, person-from-the-interwebs!
			</p>
			<p className='text-base text-gray-500 mb-8'>
				There are 8<span className='italic'> achievements </span>
				available on this website. Try and get &apos;em all. Some are
				pretty straight forward. Others, however, may require some
				effort.
			</p>
			<p className='text-base text-gray-500 mb-8'>
				You can always&nbsp;
				<Link
					href={{
						pathname: '/contact',
						query: { m: 'Hints. Gimme.' },
					}}
				>
					<a className='lnk'>ask for hints</a>
				</Link>
				&nbsp;if you&apos;re stuck (or impatient).
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Good luck and have fun &#10024;
			</p>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-white'>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Adventurer</p>
					<p>Visit the achievements page</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Explorer</p>
					<p>Visit 5 pages on adilnaqvi.com</p>
				</div>
				<div className='bg-gradient-to-r from-[#68C56C] to-[#68E46D] p-3'>
					<p className='text-xl font-semibold'>Grandmaster</p>
					<p>Find all 5 chess pieces hidden across this website</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Hacker</p>
					<p>
						Find the <span className='italic'>flag</span> hidden in
						the source code
					</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Say Hello</p>
					<p>Or recommend a book/movie/show (via the contact form)</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Almost Nice</p>
					<p>Click 68 times</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Traveller</p>
					<p>Visit 5 pages on adilnaqvi.com</p>
				</div>
				<div className='bg-gradient-to-r from-[#aeaeae] to-[#c2c2c2] p-3'>
					<p className='text-xl font-semibold'>Teapot</p>
					<p>I&apos;m a teapot</p>
				</div>
			</div>
			<p className='text-base text-gray-500 mt-16'>
				<span className='italic'>Achievements</span> were heavily
				inspired by&nbsp;
				<a
					href='https://www.maxlaumeister.com/'
					target='_blank'
					rel='noopener noreferrer'
					className='lnk'
				>
					Maximillian Laumeister
				</a>
				. Go check him out.
			</p>
		</motion.section>
	);
}

Achievements.title = 'Achievements';

export default Achievements;
