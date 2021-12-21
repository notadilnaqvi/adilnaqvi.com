import { useContext } from 'react';
import { AppContext } from '../context';
import { decrement, increment } from '../store';

function About() {
	const { state, dispatch } = useContext(AppContext);
	return (
		<div className='w-full'>
			<h1 className='text-xl mb-2'>This is the about page</h1>
			<div className='flex items-center space-x-4'>
				<button className='btn' onClick={() => dispatch(decrement())}>
					- 1
				</button>
				<p>{state.count}</p>
				<button className='btn' onClick={() => dispatch(increment())}>
					+1
				</button>
			</div>
		</div>
	);
}

About.title = 'About';

export default About;
