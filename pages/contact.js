import { useRouter } from 'next/dist/client/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';

import { AppContext } from '@/context';
import { addAchievement } from '@/store';
import ChessPiece from '@/components/chessPiece';

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

const links = [
	{
		id: 'email',
		text: 'Drop me an email',
		anchorText: 'hello@adilnaqvi.com',
		href: 'mailto:hello@adilnaqvi.com',
		icon: (
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='19.9998'
					cy='20'
					r='20'
					fill='url(#paint0_linear_115_77)'
				/>
				<path
					d='M19.9998 7.85715C13.2969 7.85715 7.85693 13.2971 7.85693 20C7.85693 26.7029 13.2969 32.1429 19.9998 32.1429H26.0712V29.7143H19.9998C14.7298 29.7143 10.2855 25.27 10.2855 20C10.2855 14.73 14.7298 10.2857 19.9998 10.2857C25.2698 10.2857 29.7141 14.73 29.7141 20V21.7364C29.7141 22.6957 28.8519 23.6429 27.8926 23.6429C26.9334 23.6429 26.0712 22.6957 26.0712 21.7364V20C26.0712 16.6486 23.3512 13.9286 19.9998 13.9286C16.6484 13.9286 13.9284 16.6486 13.9284 20C13.9284 23.3514 16.6484 26.0714 19.9998 26.0714C21.6755 26.0714 23.2055 25.3914 24.2984 24.2864C25.0876 25.3671 26.4476 26.0714 27.8926 26.0714C30.2848 26.0714 32.1426 24.1286 32.1426 21.7364V20C32.1426 13.2971 26.7026 7.85715 19.9998 7.85715ZM19.9998 23.6429C17.9841 23.6429 16.3569 22.0157 16.3569 20C16.3569 17.9843 17.9841 16.3571 19.9998 16.3571C22.0155 16.3571 23.6426 17.9843 23.6426 20C23.6426 22.0157 22.0155 23.6429 19.9998 23.6429Z'
					fill='white'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_115_77'
						x1='6.42833'
						y1='1.82273e-07'
						x2='35.3569'
						y2='40'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#0785C5' />
						<stop offset='1' stopColor='#7CA8C8' />
					</linearGradient>
				</defs>
			</svg>
		),
	},
	{
		id: 'github',
		text: 'View my code',
		anchorText: 'github.com/notadilnaqvi',
		href: 'https://github.com/notadilnaqvi',
		icon: (
			<svg
				width='40'
				height='39'
				viewBox='0 0 40 39'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M20.002 1.67339e-06C8.95071 -0.0044671 -0.000244141 8.94202 -0.000244141 19.9844C-0.000244141 28.7163 5.59913 36.139 13.3971 38.8649C14.4473 39.1286 14.2864 38.3823 14.2864 37.8729V34.4096C8.2223 35.1201 7.97652 31.1071 7.56986 30.4368C6.7476 29.0336 4.80369 28.6761 5.38463 28.0058C6.76548 27.2953 8.17314 28.1846 9.80425 30.5932C10.984 32.3405 13.2854 32.0456 14.4518 31.7551C14.7065 30.705 15.2517 29.7665 16.0024 29.0381C9.71934 27.912 7.10064 24.0778 7.10064 19.5196C7.10064 17.3076 7.82905 15.2743 9.25906 13.6342C8.34743 10.9306 9.34396 8.6158 9.47803 8.2717C12.0744 8.03933 14.7735 10.1307 14.9836 10.2961C16.4583 9.89834 18.143 9.6883 20.0288 9.6883C21.9236 9.6883 23.6128 9.90727 25.1009 10.3095C25.6058 9.92515 28.1083 8.1287 30.5215 8.34767C30.6511 8.69177 31.6253 10.953 30.7673 13.6208C32.2152 15.2653 32.9525 17.3165 32.9525 19.533C32.9525 24.1001 30.3159 27.9388 24.015 29.047C24.5546 29.5778 24.9832 30.2108 25.2755 30.909C25.5678 31.6072 25.7181 32.3567 25.7176 33.1136V38.141C25.7533 38.5432 25.7176 38.9409 26.3879 38.9409C34.3021 36.273 39.9998 28.7968 39.9998 19.9888C39.9998 8.94202 31.0443 1.67339e-06 20.002 1.67339e-06V1.67339e-06Z'
					fill='url(#paint0_linear_115_83)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_115_83'
						x1='4.86737'
						y1='6.25836'
						x2='39.9998'
						y2='44.6429'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#4E4E4E' />
						<stop offset='1' stopColor='#606060' />
					</linearGradient>
				</defs>
			</svg>
		),
	},
	{
		id: 'linkedin',
		text: 'Hire me',
		anchorText: 'linkedin.com/in/notadilnaqvi/',
		href: 'https://www.linkedin.com/in/notadilnaqvi/',
		icon: (
			<svg
				width='40'
				height='41'
				viewBox='0 0 40 41'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='20'
					cy='20.5173'
					r='20'
					fill='url(#paint0_linear_115_79)'
				/>
				<path
					d='M14.2857 14.803C15.4691 14.803 16.4285 13.8436 16.4285 12.6601C16.4285 11.4767 15.4691 10.5173 14.2857 10.5173C13.1022 10.5173 12.1428 11.4767 12.1428 12.6601C12.1428 13.8436 13.1022 14.803 14.2857 14.803Z'
					fill='white'
				/>
				<path
					d='M18.0234 15.8101V27.6592H21.6319V21.7995C21.6319 20.2534 21.9173 18.756 23.7977 18.756C25.6522 18.756 25.6752 20.5238 25.6752 21.8972V27.6601H29.2857V21.1621C29.2857 17.9702 28.6116 15.5173 24.9523 15.5173C23.1954 15.5173 22.0178 16.5002 21.5362 17.4305H21.4874V15.8101H18.0234V15.8101ZM12.1428 15.8101H15.7571V27.6592H12.1428V15.8101Z'
					fill='white'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_115_79'
						x1='20'
						y1='0.517273'
						x2='20'
						y2='40.5173'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#00A2F3' />
						<stop offset='1' stopColor='#0785C5' />
					</linearGradient>
				</defs>
			</svg>
		),
	},
	{
		id: 'twitter',
		text: 'Know me better',
		anchorText: 'twitter.com/notadilnaqvi',
		href: 'https://twitter.com/notadilnaqvi',
		icon: (
			<svg
				width='40'
				height='41'
				viewBox='0 0 40 41'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M20 40.5173C17.2917 40.5173 14.7005 39.9899 12.2266 38.9352C9.7526 37.8806 7.6237 36.4613 5.83984 34.6774C4.05599 32.8936 2.63672 30.7647 1.58203 28.2907C0.527344 25.8168 0 23.2256 0 20.5173C0 17.8089 0.527344 15.2178 1.58203 12.7438C2.63672 10.2699 4.05599 8.14097 5.83984 6.35712C7.6237 4.57326 9.7526 3.15399 12.2266 2.0993C14.7005 1.04462 17.2917 0.517273 20 0.517273C22.7083 0.517273 25.2995 1.04462 27.7734 2.0993C30.2474 3.15399 32.3763 4.57326 34.1602 6.35712C35.944 8.14097 37.3633 10.2699 38.418 12.7438C39.4727 15.2178 40 17.8089 40 20.5173C40 23.2256 39.4727 25.8168 38.418 28.2907C37.3633 30.7647 35.944 32.8936 34.1602 34.6774C32.3763 36.4613 30.2474 37.8806 27.7734 38.9352C25.2995 39.9899 22.7083 40.5173 20 40.5173ZM31.7578 10.5173C31.6016 10.5954 31.3672 10.7386 31.0547 10.947L30.293 11.4548L29.5703 11.8454L28.75 12.1188C27.7865 11.0511 26.6016 10.5173 25.1953 10.5173C22.1484 10.5173 20.625 11.7933 20.625 14.3454V16.6501C16.4323 16.4418 13.2161 14.9053 10.9766 12.0407C10.3255 12.7178 10 13.46 10 14.2673C10 15.986 10.638 17.2881 11.9141 18.1735C11.7578 18.1735 11.5365 18.1865 11.25 18.2126C10.9635 18.2386 10.7357 18.2386 10.5664 18.2126C10.3971 18.1865 10.2083 18.1214 10 18.0173C10 19.2152 10.319 20.2113 10.957 21.0056C11.5951 21.7998 12.474 22.3141 13.5938 22.5485C13.3333 22.861 12.9688 23.0173 12.5 23.0173C12.0833 23.0173 11.7188 22.9001 11.4062 22.6657C11.4062 23.6813 11.8945 24.4691 12.8711 25.029C13.8477 25.5889 14.9479 25.8819 16.1719 25.9079C15.7031 26.611 15.0195 27.1384 14.1211 27.4899C13.2227 27.8415 12.2656 28.0173 11.25 28.0173C10.8854 28.0173 10.3841 27.9261 9.74609 27.7438C9.10807 27.5615 8.77604 27.4704 8.75 27.4704C9.16667 28.3037 10.0195 29.0199 11.3086 29.6188C12.5977 30.2178 14.2318 30.5173 16.2109 30.5173C17.9557 30.5173 19.5833 30.2113 21.0938 29.5993C22.6042 28.9873 23.8932 28.1735 24.9609 27.1579C26.0286 26.1423 26.9466 24.9834 27.7148 23.6813C28.4831 22.3793 29.056 21.0316 29.4336 19.6384C29.8112 18.2451 30 16.8714 30 15.5173C30 15.4652 30.1562 15.3545 30.4688 15.1852C30.7812 15.016 31.1458 14.7881 31.5625 14.5016C31.9792 14.2152 32.2917 13.9157 32.5 13.6032C31.0938 13.6032 30.1562 13.6293 29.6875 13.6813C30.599 13.1345 31.2891 12.0798 31.7578 10.5173Z'
					fill='url(#paint0_linear_115_80)'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_115_80'
						x1='12.8571'
						y1='0.517273'
						x2='28.9286'
						y2='40.5173'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#00A2F3' />
						<stop offset='1' stopColor='#0687C7' />
					</linearGradient>
				</defs>
			</svg>
		),
	},
	{
		id: 'lichess',
		text: 'Watch me play',
		anchorText: 'lichess.org/@/notadilnaqvi',
		href: 'https://lichess.org/@/notadilnaqvi',
		icon: (
			<svg
				width='40'
				height='40'
				viewBox='0 0 40 40'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='20'
					cy='20'
					r='20'
					fill='url(#paint0_linear_814_467)'
				/>
				<path
					d='M27.6201 8C25.819 8.20757 24.3282 8.44791 22.8822 9.48178C10.5678 8.6386 7.39124 16.9547 8.09125 22.3332C9.52647 32.6868 24.0292 35.4532 28.8308 28.4589C25.0328 32.2806 18.996 32.8049 14.3801 29.9904C9.76423 27.1758 7.48614 21.3539 10.1336 16.4751C12.7816 11.5962 17.4363 10.0037 22.5557 10.9323C23.7955 10.2281 25.2216 9.33331 26.4614 9.34969L25.5971 11.763L32.1033 22.3749C31.8793 25.1825 29.318 25.4099 29.318 25.4099C29.0252 24.68 28.4843 23.949 26.8476 22.4126C25.2114 20.8762 17.9368 17.359 18.7924 14.3646C17.7715 17.8243 24.0532 21.3921 25.9557 23.1356C27.8588 24.8786 28.7241 26.1349 28.9124 26.4905C28.9124 26.4905 33.7043 25.2471 32.9114 22.0576L26.8262 11.3127L27.6201 8Z'
					fill='white'
					stroke='white'
					strokeOpacity='0.996078'
					strokeLinejoin='round'
				/>
				<defs>
					<linearGradient
						id='paint0_linear_814_467'
						x1='30'
						y1='27.8571'
						x2='10.7143'
						y2='8.21428'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#272727' />
						<stop offset='1' stopColor='#454545' />
					</linearGradient>
				</defs>
			</svg>
		),
	},
];

function Contact() {
	const router = useRouter();
	const { dispatch } = useContext(AppContext);
	const [isDisabled, setIsDisabled] = useState(false);
	const [linkVisibility, setLinkVisibility] = useState({
		email: false,
		github: false,
		linkedin: false,
		twitter: false,
		lichess: false,
	});

	const { query } = router;

	// Can't let the following be initialized as undefined as that will make
	// the form inputs uncontrolled. We use empty strings instead
	const name = query.n ?? '';
	const email = query.e ?? '';
	const organization = query.o ?? '';
	const message = query.m ?? '';

	const [form, setForm] = useState({ name, email, organization, message });

	// Auto-fill the form based on query params
	useEffect(() => {
		setForm({ name, email, organization, message });
	}, [name, email, organization, message]);

	async function handleSubmit(event) {
		event.preventDefault();
		setIsDisabled(true);
		const res = await fetch('/api/form', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(form),
		});
		setIsDisabled(false);
		if (res.ok) {
			dispatch(addAchievement('chatterer'));
			// Reset form
			setForm({ name: '', email: '', organization: '', message: '' });
			// Clear query params in the URL if any
			router.push('/contact');
		}
	}

	function handleChange(event) {
		setForm(oldForm => ({
			...oldForm,
			[event.target.name]: event.target.value,
		}));
	}

	function toggleLinkVisibility(id) {
		setLinkVisibility(prev => ({ ...prev, [id]: !prev[id] }));
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
			className='grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 text-gray-700'
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
							className='btn disabled:btn-disabled mr-auto transition-all duration-200 ease-in-out'
							type='submit'
							disabled={isDisabled}
						>
							Submit
						</button>
						<p className='text-gray-500 text-sm text-opacity-70'>
							It's currently {currentTime} in my city
						</p>
					</div>
				</form>
			</motion.section>
			<motion.section variants={variants} className='w-full'>
				<h1 className='text-2xl text-gray-700 mb-8'>Find me online</h1>
				<ul className='space-y-8'>
					{links.map(link => {
						return (
							<li
								className='flex items-center justify-between'
								key={link.id}
							>
								<AnimatePresence>
									{linkVisibility[link.id] ? (
										<>
											<motion.a
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												exit={{ opacity: 0 }}
												className='lnk'
												href={link.href}
												target='_blank'
												rel='noopener noreferrer'
											>
												{link.anchorText}
											</motion.a>
											{link.id === 'github' && (
												<ChessPiece name='queen' />
											)}
										</>
									) : (
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 1 }}
										>
											{link.text}
										</motion.p>
									)}
								</AnimatePresence>
								<button
									onClick={() =>
										toggleLinkVisibility(link.id)
									}
									className='text-white h-full flex items-center outline-none'
								>
									{link.icon}
								</button>
							</li>
						);
					})}
				</ul>
			</motion.section>
		</motion.div>
	);
}

Contact.title = 'Contact';

export default Contact;
