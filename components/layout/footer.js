import Image from 'next/image';

function Footer() {
	return (
		<footer className='w-full flex items-center justify-center bg-gray-100 py-10'>
			<div className='max-w-[1024px] w-full flex justify-between space-x-6 text-sm text-gray-500 px-6 flex-col md:flex-row md:space-y-0 space-y-8 items-center'>
				<div className='flex flex-col md:place-items-start items-center'>
					<p>Copyright &copy; 2021 Adil Naqvi</p>
					<p>All Rights Reserved</p>
				</div>
				<div className='flex space-x-6'>
					<a
						className=''
						href='https://www.github.com/notadilnaqvi'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='https://dummyimage.com/40x40/dadada/dadada'
							width='40'
							height='40'
						/>
					</a>
					<a
						className=''
						href='https://www.linkedin.com/in/notadilnaqvi/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='https://dummyimage.com/40x40/dadada/dadada'
							width='40'
							height='40'
						/>
					</a>
					<a
						className=''
						href='mailto:hello@adilnaqvi.com'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='https://dummyimage.com/40x40/dadada/dadada'
							width='40'
							height='40'
						/>
					</a>
					<a
						className=''
						href='https://www.twitter.com/notadilnaqvi'
						target='_blank'
						rel='noopener noreferrer'
					>
						<img
							src='https://dummyimage.com/40x40/dadada/dadada'
							width='40'
							height='40'
						/>
					</a>
				</div>
				<div className='flex flex-col md:place-items-start items-center'>
					<p>Thanks for stopping by</p>
					<p>
						Made with <span className='text-red-400'>&#10084;</span>
						&nbsp;in Next.js
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
