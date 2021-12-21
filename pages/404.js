import Link from 'next/link';

function Error404() {
	return (
		<section className='w-full pt-16'>
			<h1 className='text-2xl text-gray-700'>Error 404</h1>
			<p className='text-gray-500 mb-8'>Not Found</p>
			<p className='text-gray-500 mb-8'>
				The requested page was not found
			</p>
			<Link href='/'>
				<button className='bg-th-primary text-white px-3 py-1'>
					Go back home
				</button>
			</Link>
		</section>
	);
}

Error404.title = '404 Not Found';

export default Error404;
