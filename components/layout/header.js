import Link from 'next/link';
import { useState } from 'react';

function Header() {
	const [visibility, setVisibility] = useState(false);

	const toggleVisibility = () => {
		setVisibility(val => !val);
	};

	return (
		<header className='fixed w-full flex justify-center h-14 bg-gradient-to-r from-th-primary to-th-secondary tracking-widest'>
			<nav className='max-w-[1024px] w-full flex h-full font-medium px-6'>
				{/* Logo */}
				<div className='h-full mr-auto'>
					<Link href='/'>
						<a className='text-white h-full flex items-center'>
							<svg
								width='32'
								height='32'
								viewBox='0 0 100 100'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect
									x='4'
									y='4'
									width='92'
									height='92'
									stroke='white'
									strokeWidth='8'
								/>
								<path
									d='M43.8066 86L42.251 81.9922H42.04C40.6865 83.6973 39.2891 84.8838 37.8477 85.5518C36.4238 86.2021 34.5605 86.5273 32.2578 86.5273C29.4277 86.5273 27.1953 85.7188 25.5605 84.1016C23.9434 82.4844 23.1348 80.1816 23.1348 77.1934C23.1348 74.0645 24.2246 71.7617 26.4043 70.2852C28.6016 68.791 31.9062 67.9648 36.3184 67.8066L41.4336 67.6484V66.3564C41.4336 63.3682 39.9043 61.874 36.8457 61.874C34.4902 61.874 31.7217 62.5859 28.54 64.0098L25.877 58.5781C29.2695 56.8027 33.0312 55.915 37.1621 55.915C41.1172 55.915 44.1494 56.7764 46.2588 58.499C48.3682 60.2217 49.4229 62.8408 49.4229 66.3564V86H43.8066ZM41.4336 72.3418L38.3223 72.4473C35.9844 72.5176 34.2441 72.9395 33.1016 73.7129C31.959 74.4863 31.3877 75.6641 31.3877 77.2461C31.3877 79.5137 32.6885 80.6475 35.29 80.6475C37.1533 80.6475 38.6387 80.1113 39.7461 79.0391C40.8711 77.9668 41.4336 76.543 41.4336 74.7676V72.3418ZM84.9395 86H76.8975V68.7822C76.8975 66.6553 76.5195 65.0645 75.7637 64.0098C75.0078 62.9375 73.8037 62.4014 72.1514 62.4014C69.9014 62.4014 68.2754 63.1572 67.2734 64.6689C66.2715 66.1631 65.7705 68.6504 65.7705 72.1309V86H57.7285V56.5215H63.8721L64.9531 60.292H65.4014C66.2979 58.8682 67.5283 57.7959 69.0928 57.0752C70.6748 56.3369 72.4678 55.9678 74.4717 55.9678C77.8994 55.9678 80.501 56.8994 82.2764 58.7627C84.0518 60.6084 84.9395 63.2803 84.9395 66.7783V86Z'
									fill='white'
								/>
							</svg>
						</a>
					</Link>
				</div>

				{/* Nav links */}
				<ul className='hidden md:flex h-full'>
					<li>
						<Link href='/about'>
							<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
								About
							</a>
						</Link>
					</li>
					<li>
						<Link href='/work'>
							<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
								Work
							</a>
						</Link>
					</li>
					<li>
						<Link href='/contact'>
							<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
								Contact
							</a>
						</Link>
					</li>
				</ul>

				{/* Burger menu */}
				<button
					onClick={toggleVisibility}
					className='flex flex-col justify-center space-y-[8px] md:hidden items-center px-5 hover:bg-[#0000001A] transition duration-200 ease-in-out z-50'
				>
					<span
						className={`w-[24px] bg-white h-[2px] transition duration-200 ease-in-out ${
							visibility && 'rotate-45 translate-y-[10px]'
						}`}
					></span>
					<span
						className={`w-[24px] bg-white h-[2px] transition duration-200 ease-in-out ${
							visibility && 'opacity-0'
						}`}
					></span>
					<span
						className={`w-[24px] bg-white h-[2px] transition duration-200 ease-in-out ${
							visibility && '-rotate-45 translate-y-[-10px]'
						}`}
					></span>
				</button>

				{/* Burger menu nav links */}
				<div
					className={`block md:hidden absolute w-full z-40 right-0 h-screen ${
						visibility
							? 'bg-[#00000099] visible'
							: 'bg-none invisible'
					} transition-all duration-200 ease-in-out `}
					onClick={() => setVisibility(false)}
				>
					<ul
						className={`pt-32 relative w-[256px] bg-gradient-to-b from-th-primary to-th-secondary tracking-widest h-full space-y-2 float-right ${
							visibility ? 'right-0' : '-right-64'
						} transition-all duration-200 ease-in-out`}
					>
						<li>
							<Link href='/'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									Home
								</a>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									About
								</a>
							</Link>
						</li>
						<li>
							<Link href='/work'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									Work
								</a>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									Contact
								</a>
							</Link>
						</li>
						<li>
							<Link href='/404'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									404
								</a>
							</Link>
						</li>
						<li>
							<Link href='/500'>
								<a className='text-white h-16 flex items-center px-8 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
									500
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
