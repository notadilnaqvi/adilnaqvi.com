import Link from 'next/link';
function Header() {
	return (
		<header className='w-full flex items-center justify-center h-16 bg-gradient-to-r from-th-primary to-th-secondary'>
			<ul className='max-w-4xl w-full flex flex-row items-center justify-end h-full'>
				<li className='h-full mr-auto'>
					<Link href='/'>
						<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
							Home
						</a>
					</Link>
				</li>
				<li className='h-full'>
					<Link href='/about'>
						<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
							About
						</a>
					</Link>
				</li>
				<li className='h-full'>
					<Link href='/work'>
						<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
							Work
						</a>
					</Link>
				</li>
				<li className='h-full'>
					<Link href='/404'>
						<a className='text-white h-full flex items-center px-4 hover:bg-[#0000001A] transition duration-200 ease-in-out'>
							404
						</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
