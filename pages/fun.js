import Link from 'next/link';
import { useContext } from 'react';
import { motion } from 'framer-motion';

import { AppContext } from '@/context';

const achievementsData = [
	{
		key: 'adventurer',
		title: 'Adventurer',
		text: 'Visit the :) page',
	},
	{
		key: 'explorer',
		title: 'Explorer',
		text: 'Visit 5 pages on adilnaqvi.com',
	},
	{
		key: 'chatterer',
		title: 'Chatterer',
		text: 'Say hello. Or ask a question. Or recommend a movie',
	},
	{
		key: 'grandmaster',
		title: 'Grandmaster',
		text: 'Find all 6 chess pieces hidden across this website',
	},
	{
		key: 'airplane-mode',
		title: 'Airplane Mode',
		text: 'Get to the network error page',
	},
	{
		key: 'hacker',
		title: 'Hacker',
		text: 'Find the flag hidden in the source code',
	},
	{
		key: 'cheater',
		title: 'Cheater',
		text: "I shouldn't have put everything in local storage",
	},
	{
		key: 'teapot',
		title: 'Teapot',
		text: "I'm a teapot",
	},
];

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

function Fun() {
	const { state } = useContext(AppContext);
	const { achievements, pieces } = state;

	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700 mb-8'>:)</h1>
			<p className='text-base text-gray-500 mb-8'>
				Hello, person-from-the-interwebs!
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Who says browsing portfolios has to be just that? There are
				several easter-eggs hidden all across this website. Find them to
				unlock achievements. Most of them are easy. Others may require
				some effort.
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
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-white'>
				{achievementsData.map(achievement => {
					const isAchieved = achievements.includes(achievement.key);
					return (
						<div
							className={`p-3 bg-gradient-to-r ${
								isAchieved
									? 'from-[#68c56c] to-[#68e46d]'
									: 'from-[#aeaeae] to-[#c2c2c2]'
							}`}
							key={achievement.key}
						>
							<p className='text-xl font-semibold'>
								{achievement.title}
							</p>
							<p>
								{achievement.text}
								{achievement.key === 'grandmaster' &&
									` (${pieces.length}/6 so far)`}
							</p>
						</div>
					);
				})}
			</div>
			<p className='text-base text-gray-500 mt-16'>
				Inspired by&nbsp;
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
			<p className='text-base text-gray-400 mt-8'>
				Some achievements are only unlockable on a desktop browser.
			</p>
		</motion.section>
	);
}

Fun.title = ':)';

export default Fun;
