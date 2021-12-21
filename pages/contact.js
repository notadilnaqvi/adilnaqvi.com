import { useState } from 'react';
import Image from 'next/image';

function Contact({ params }) {
	const { name, email, org, msg } = params;
	const [form, setForm] = useState({ name, email, org, msg });

	const handleSubmit = async event => {
		event.preventDefault();
		setForm({ name: '', email: '', org: '', msg: '' });
		console.log(form);
	};

	const handleChange = event => {
		setForm(oldForm => ({
			...oldForm,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-16'>
			<section className='w-full'>
				<h1 className='text-2xl text-gray-700 mb-8'>Contact</h1>
				<form className='flex flex-col space-y-2'>
					<label htmlFor='name'>Name</label>
					<input
						id='name'
						name='name'
						type='text'
						className='outline-none border-2 px-2 py-1 focus:border-th-secondary'
						onChange={handleChange}
						value={form.name}
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						name='email'
						type='email'
						className='outline-none border-2 px-2 py-1 focus:border-th-secondary'
						onChange={handleChange}
						value={form.email}
						required
					/>
					<label htmlFor='org'>Organization</label>
					<input
						id='org'
						name='org'
						type='text'
						className='outline-none border-2 px-2 py-1 focus:border-th-secondary'
						onChange={handleChange}
						value={form.org}
						required
					/>
					<label htmlFor='msg'>Message</label>
					<textarea
						id='msg'
						name='msg'
						className='outline-none border-2 px-2 py-1 focus:border-th-secondary resize-y'
						onChange={handleChange}
						rows={3}
						maxLength={256}
						value={form.msg}
						required
					/>
					<button
						className='bg-th-primary text-white px-3 py-1 w-24 ml-auto'
						onClick={handleSubmit}
					>
						Submit
					</button>
				</form>
			</section>
			<section className='w-full'>
				<h1 className='text-2xl text-gray-700 mb-8'>Find me online</h1>
				<ul className='space-y-8'>
					<li className='flex items-center justify-between'>
						<p className=''>Drop me an email</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
					<li className='flex items-center justify-between'>
						<p className=''>View my projects</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
					<li className='flex items-center justify-between'>
						<p className=''>See my designs</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
					<li className='flex items-center justify-between'>
						<p className=''>Hire me</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
					<li className='flex items-center justify-between'>
						<p className=''>Know me better</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
					<li className='flex items-center justify-between'>
						<p className=''>Watch me play</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
								// className='rounded-full'
							/>
						</div>
					</li>
				</ul>
			</section>
		</div>
	);
}

Contact.title = 'Contact';

export default Contact;

export async function getServerSideProps({ query }) {
	const params = {
		name: query.n ?? '',
		email: query.e ?? '',
		org: query.o ?? '',
		msg: query.m ?? '',
	};
	return {
		props: { params },
	};
}
