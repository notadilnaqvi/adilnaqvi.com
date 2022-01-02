import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Router, useRouter } from 'next/dist/client/router';
import Link from 'next/link';

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
	animate: { transition: { staggerChildren: 0.075 } },
};

function Contact() {
	const router = useRouter();
	const { query } = router;

	const name = query.n ?? '';
	const email = query.e ?? '';
	const organization = query.o ?? '';
	const message = query.m ?? '';

	const [form, setForm] = useState({ name, email, organization, message });

	useEffect(() => {
		setForm({ name, email, organization, message });
	}, [name, email, organization, message]);

	async function handleSubmit(event) {
		event.preventDefault();
		const res = await fetch('/api/form', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
		if (res.ok) {
			setForm({ name: '', email: '', organization: '', message: '' });
			router.push('/contact');
		}
	}

	function handleChange(event) {
		setForm(oldForm => ({
			...oldForm,
			[event.target.name]: event.target.value,
		}));
	}

	const localeString = new Date().toLocaleTimeString('en-US', {
		timeZone: 'Asia/Karachi',
	});

	const currentTime =
		localeString.split(' ')[0].split(':')[0] +
		':' +
		localeString.split(' ')[0].split(':')[1] +
		' ' +
		localeString.split(' ')[1];

	return (
		<motion.div
			variants={stagger}
			initial='initial'
			animate='animate'
			className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-16'
		>
			<motion.section variants={variants} className='w-full'>
				<h1 className='text-2xl text-gray-700 mb-8'>Contact</h1>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col space-y-2'>
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
						<label htmlFor='organization'>Organization</label>
						<input
							id='organization'
							name='organization'
							type='text'
							className='outline-none border-2 px-2 py-1 focus:border-th-secondary'
							onChange={handleChange}
							value={form.organization}
							placeholder='Optional'
						/>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							name='message'
							className='outline-none border-2 px-2 py-1 focus:border-th-secondary resize-y'
							onChange={handleChange}
							rows={3}
							maxLength={256}
							value={form.message}
							required
						/>
					</div>
					<div className='mt-4 flex items-center'>
						<button
							className='bg-th-primary text-white px-3 py-1 w-24 mr-auto'
							type='submit'
						>
							Submit
						</button>
						<p className='text-gray-500'>
							It's currently {currentTime} in my city
						</p>
					</div>
				</form>
			</motion.section>
			<motion.section variants={variants} className='w-full'>
				<h1 className='text-2xl text-gray-700 mb-8'>Find me online</h1>
				<ul className='space-y-8'>
					<li className='flex items-center justify-between'>
						<p className=''>Drop me an email</p>
						<div className='z-[-1]'>
							<Image
								src='https://dummyimage.com/40x40/dadada/dadada'
								width='40'
								height='40'
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
							/>
						</div>
					</li>
				</ul>
			</motion.section>
		</motion.div>
	);
}

Contact.title = 'Contact';

export default Contact;
