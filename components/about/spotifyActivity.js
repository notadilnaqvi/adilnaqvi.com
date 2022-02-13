import useSWR from 'swr';
import Image from 'next/image';

import { calcTimeAgo, fetcher } from '@/utils';

function SpotifyActivity() {
	const { data, error } = useSWR('/api/spotify', fetcher);

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

	const song = data.items[0].track.name;
	const timeAgo = calcTimeAgo(data.items[0].played_at);
	const url = `https://open.spotify.com/track/${data.items[0].track.id}`;

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
				Was listening to&nbsp;
				<a
					className='lnk'
					href={url}
					target='_blank'
					rel='noopener noreferrer'
				>
					{song}
				</a>
				<span className='text-gray-500'> - {timeAgo}</span>
			</p>
		</div>
	);
}

export default SpotifyActivity;
