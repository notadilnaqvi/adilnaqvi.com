import Link from 'next/link';
function Header() {
	return (
		<header className='w-full flex items-center justify-center border-b-2 h-16'>
			<ul className='max-w-4xl w-full flex space-x-6'>
				<li>
					<Link href='/'>
						<a className='text-blue-500 hover:underline'>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a className='text-blue-500 hover:underline'>About</a>
					</Link>
				</li>
				<li>
					<Link href='/work'>
						<a className='text-blue-500 hover:underline'>Work</a>
					</Link>
				</li>
				<li>
					<Link href='/404'>
						<a className='text-blue-500 hover:underline'>404</a>
					</Link>
				</li>
			</ul>
		</header>
	);
}

export default Header;
