import Link from 'next/link';
import { motion } from 'framer-motion';

import GithubActivity from '@/components/about/githubActivity';
import LichessActivity from '@/components/about/lichessActivity';
import SpotifyActivity from '@/components/about/spotifyActivity';
import TwitterActivity from '@/components/about/twitterActivity';

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

const stagger = {
	animate: { transition: { staggerChildren: 0.035 } },
};

function About() {
	return (
		<motion.div
			variants={stagger}
			initial='initial'
			animate='animate'
			className='flex flex-col pt-16 space-y-8'
		>
			<motion.section
				variants={variants}
				className='w-full'
				id='what-am-i-upto'
			>
				<h1 className='text-2xl text-gray-700 mb-8'>What I'm upto</h1>
				<div className='flex flex-col space-y-4'>
					<GithubActivity />
					<TwitterActivity />
					<SpotifyActivity />
					<LichessActivity />
				</div>
			</motion.section>
			<motion.section
				variants={variants}
				className='w-full'
				id='what-am-i-reading'
			>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I'm reading
				</h1>
				<div className='flex space-y-4'>
					<img
						className='rounded-sm'
						src='/assets/tgost.webp'
						width='150'
						height='200'
						alt='Adil Naqvi'
					/>
				</div>
			</motion.section>
			<motion.section
				variants={variants}
				className='w-full'
				id='what-am-i-watching'
			>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I'm watching
				</h1>
				<div className='flex space-x-4'>
					<img
						className='rounded-sm'
						src='/assets/al.webp'
						width='150'
						height='200'
						alt='Adil Naqvi'
					/>
					<img
						className='rounded-sm'
						src='/assets/aot.webp'
						width='150'
						height='200'
						alt='Adil Naqvi'
					/>
				</div>
			</motion.section>
			<motion.section
				variants={variants}
				className='w-full'
				id='about-this-website'
			>
				<h1 className='text-2xl text-gray-700 mb-8'>
					About this website
				</h1>
				<div className='flex flex-col space-y-4'>
					<p className='text-gray-700'>
						Made with Next.js and Tailwind
					</p>
					<p className='text-gray-700'>Hosted on Vercel</p>
					<p className='text-gray-700'>
						Open source under MIT license.&nbsp;
						<a
							className='lnk'
							href='https://github.com/notadilnaqvi/adilnaqvi.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							See source code
						</a>
					</p>
					<p className='text-gray-700'>
						Have a suggestion?&nbsp;
						<Link href='/contact'>
							<a className='lnk'>Let me know</a>
						</Link>
					</p>
				</div>
			</motion.section>
		</motion.div>
	);
}

About.title = 'About';

export default About;
