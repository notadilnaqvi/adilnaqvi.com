import { useContext } from 'react';
import { AppContext } from '../context';
import { addChessPiece } from '../store';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

function ChessPiece({ name }) {
	const { state, dispatch } = useContext(AppContext);
	const { pieces } = state;
	const hasBeenCollected = pieces.includes(name);

	function onClick() {
		dispatch(addChessPiece(name));
	}

	return (
		<AnimatePresence>
			{hasBeenCollected || (
				<motion.button
					key={name}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -16 }}
					onClick={onClick}
					title='Click to collect'
					className='outline-none -mb-2'
				>
					<Image
						src={`/assets/${name}.png`}
						alt={name}
						width={32}
						height={32}
					/>
				</motion.button>
			)}
		</AnimatePresence>
	);
}

export default ChessPiece;
