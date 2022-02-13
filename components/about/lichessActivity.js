import useSWR from 'swr';
import Image from 'next/image';

import { calcTimeAgo, fetcher } from 'util';

function LichessActivity() {
	const { data, error } = useSWR('/api/lichess', fetcher);

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

	const speed = data.speed;
	const timeAgo = calcTimeAgo(data.lastMoveAt);
	const url = `https://lichess.org/${data.id}`;

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
				Played a&nbsp;
				<a
					className='lnk'
					href={url}
					target='_blank'
					rel='noopener noreferrer'
				>
					{speed} game
				</a>
				<span className='text-gray-500'> - {timeAgo}</span>
			</p>
		</div>
	);
}

export default LichessActivity;
