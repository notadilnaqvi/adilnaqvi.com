import useSWR from 'swr';
import Image from 'next/image';
import { calcTimeAgo, fetcher } from '../../util.js';

function TwitterActivity() {
	const { data, error } = useSWR('/api/twitter', fetcher);

	if (!data || error) {
		return (
			<div className='flex space-x-4'>
				<span>
					<Image
						src='https://dummyimage.com/20x20/dadada/dadada'
						width='20'
						height='20'
						layout='fixed'
						alt=''
					/>
				</span>
				<p className='text-gray-700'>No recent activity</p>
			</div>
		);
	}

	const timeAgo = calcTimeAgo(data.data[0].created_at);
	const url = `https://twitter.com/notadilnaqvi/status/${data.data[0].id}`;
	const isRt = data.data[0].text.startsWith('RT @');
	const rtHandle = isRt ? data.data[0].text.match(/@\w+/)[0] : null;

	return (
		<div className='flex space-x-4'>
			<span>
				<Image
					src='https://dummyimage.com/20x20/dadada/dadada'
					width='20'
					height='20'
					layout='fixed'
					alt=''
				/>
			</span>
			<p className='text-gray-700'>
				{isRt ? (
					<a
						className='lnk'
						href={url}
						target='_blank'
						rel='noopener noreferrer'
					>
						Retweeted {rtHandle}
					</a>
				) : (
					<span>
						Last{' '}
						<a
							href={url}
							target='_blank'
							rel='noopener noreferrer'
							className='lnk'
						>
							tweeted
						</a>
					</span>
				)}
				<span className='text-gray-500'> - {timeAgo}</span>
			</p>
		</div>
	);
}

export default TwitterActivity;
