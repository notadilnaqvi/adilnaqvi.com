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
			className='flex flex-col pt-16 space-y-16'
		>
			<motion.section variants={variants} className='w-full' id='me'>
				<h1 className='text-2xl text-gray-700 mb-8'>About me</h1>
				<div className='flex flex-col space-y-4'>
					<div className='flex items-center space-x-4'>
						<span>🤸‍♂️</span>
						<p className='text-gray-700'>Hi, I'm Adil</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>👨‍💻</span>
						<p className='text-gray-700'>
							I'm working as a software developer over at&nbsp;
							<a
								className='lnk'
								href='https://teamo.io'
								target='_blank'
								rel='noopener noreferrer'
							>
								Teamo
							</a>
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>🇵🇰</span>
						<p className='text-gray-700'>
							I'm based in Lahore, Pakistan
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>🙂</span>
						<p className='text-gray-700'>
							I like chess, Age of Empires II, Linux, Modern
							Family, and mutton biryani
						</p>
					</div>
				</div>
			</motion.section>
			<motion.section variants={variants} className='w-full' id='upto'>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I&apos;m upto
				</h1>
				<div className='flex flex-col space-y-4'>
					<GithubActivity />
					<TwitterActivity />
					<SpotifyActivity />
					<LichessActivity />
				</div>
			</motion.section>
			<motion.section variants={variants} className='w-full' id='reading'>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I&apos;m reading
				</h1>
				<div className='flex space-y-4'>
					<img
						className='rounded-sm hover:bg-red-500'
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
				id='watching'
			>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I&apos;m watching
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
			<motion.section variants={variants} className='w-full' id='using'>
				<h1 className='text-2xl text-gray-700 mb-8'>
					What I&apos;m using
				</h1>
				<div className='flex flex-col space-y-4'>
					<div className='flex items-center space-x-4'>
						<span>&#128187;</span>
						<p className='text-gray-700'>
							Dell Inspiron 15 3000 - Intel Core i7 (10th Gen) -
							512 GB NVME - 16 GB DDR4
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>&#9881;&#65039;</span>
						<p className='text-gray-700'>
							Ubuntu 20.04 LTS with Qogir Dark theme
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>&#128221;</span>
						<p className='text-gray-700'>
							WebStorm &amp; PyCharm with VSCode key bindings
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>&#128104;&#8205;&#128187;</span>
						<p className='text-gray-700'>
							Alacritty + Tmux + Bash (
							<a
								className='lnk'
								href='https://github.com/notadilnaqvi/uses/tree/main/dotfiles'
								target='_blank'
								rel='noopener noreferrer'
							>
								dotfiles
							</a>
							)
						</p>
					</div>
					<div className='flex items-center space-x-4'>
						<span>&#128396;</span>
						<p className='text-gray-700'>
							Figma for light UI &amp; graphics needs
						</p>
					</div>
				</div>
			</motion.section>
			<motion.section variants={variants} className='w-full' id='website'>
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
