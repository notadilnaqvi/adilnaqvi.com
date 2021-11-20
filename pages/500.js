import Link from 'next/link';

export default function Error505() {
	return (
		<section className='w-full pt-16'>
			<h1 className='text-2xl text-gray-700'>Error 500</h1>
			<p className='text-base text-gray-500 mb-8'>
				Internal Server Error
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Welp. This wasn't supposed to happen
			</p>
			<Link href='/'>
				<button className='bg-th-primary text-white px-3 py-1'>
					Report this issue
				</button>
			</Link>
		</section>
	);
}
