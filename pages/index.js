import Image from 'next/image';
import React from 'react';

function Home() {
	return (
		<React.Fragment>
			<section className='w-full pt-16 flex flex-row justify-between'>
				<p className='text-2xl text-gray-700 leading-10'>
					Hi, I am
					<br />
					<span className='text-th-secondary'>Adil Naqvi</span>,
					<br />
					a developer focussed
					<br />
					on crafting experiences
				</p>
				<div className='z-[-1] hidden md:block'>
					<Image
						src='https://dummyimage.com/160x160/dadada/dadada'
						width='160'
						height='160'
						// className='rounded-full'
						layout='fixed'
					/>
				</div>
			</section>
		</React.Fragment>
	);
}

Home.title = 'Adil Naqvi';

export default Home;
