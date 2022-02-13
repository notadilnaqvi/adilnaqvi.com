import { motion } from 'framer-motion';

import GithubActivity from 'components/about/githubActivity';
import LichessActivity from 'components/about/lichessActivity';
import SpotifyActivity from 'components/about/spotifyActivity';
import TwitterActivity from 'components/about/twitterActivity';

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

function About() {
	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700 mb-8'>What am I upto</h1>
			<div className='flex flex-col space-y-2'>
				<GithubActivity />
				<TwitterActivity />
				<SpotifyActivity />
				<LichessActivity />
			</div>
		</motion.section>
	);
}

About.title = 'About';

export default About;
