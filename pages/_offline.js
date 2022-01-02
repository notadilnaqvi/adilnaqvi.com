import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';

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

function ErrorNoConnection() {
	const router = useRouter();

	function handleReload() {
		router.reload(window.location.pathname);
	}

	return (
		<motion.section
			initial='initial'
			animate='animate'
			variants={variants}
			className='w-full pt-16'
		>
			<h1 className='text-2xl text-gray-700'>Network Error</h1>
			<p className='text-base text-gray-500 mb-8'>
				Failed to connect to the internet
			</p>
			<p className='text-base text-gray-500 mb-8'>
				Check your internet connection and try again
			</p>
			<button
				onClick={handleReload}
				className='bg-th-primary text-white px-3 py-1'
			>
				Reload
			</button>
		</motion.section>
	);
}

ErrorNoConnection.title = 'Adil Naqvi';

export default ErrorNoConnection;
