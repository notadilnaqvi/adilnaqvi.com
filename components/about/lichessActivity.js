import useSWR from 'swr';
import Image from 'next/image';

import { calcTimeAgo, fetcher } from '@/utils';

function LichessActivity() {
	const { data, error } = useSWR('/api/lichess', fetcher);

	if (!data || error) {
		return (
			<div className='flex space-x-4 items-center'>
				<span>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle
							cx='10'
							cy='10'
							r='10'
							fill='url(#paint0_linear_814_467)'
						/>
						<path
							d='M13.81 4C12.9095 4.10378 12.1641 4.22396 11.4411 4.74089C5.2839 4.3193 3.69562 8.47737 4.04562 11.1666C4.76323 16.3434 12.0146 17.7266 14.4154 14.2295C12.5164 16.1403 9.49798 16.4025 7.19005 14.9952C4.88211 13.5879 3.74307 10.677 5.06681 8.23753C6.3908 5.7981 8.71813 5.00184 11.2779 5.46614C11.8978 5.11407 12.6108 4.66665 13.2307 4.67485L12.7985 5.88152L16.0516 11.1874C15.9396 12.5913 14.659 12.705 14.659 12.705C14.5126 12.34 14.2422 11.9745 13.4238 11.2063C12.6057 10.4381 8.96839 8.67948 9.3962 7.1823C8.88573 8.91213 12.0266 10.6961 12.9779 11.5678C13.9294 12.4393 14.3621 13.0675 14.4562 13.2452C14.4562 13.2452 16.8522 12.6235 16.4557 11.0288L13.4131 5.65633L13.81 4Z'
							fill='white'
							stroke='white'
							strokeOpacity='0.996078'
							strokeLinejoin='round'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_814_467'
								x1='15'
								y1='13.9286'
								x2='5.35714'
								y2='4.10714'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#272727' />
								<stop offset='1' stopColor='#454545' />
							</linearGradient>
						</defs>
					</svg>
				</span>
				<p className='text-gray-700'>No recent activity</p>
			</div>
		);
	}

	const speed = data.speed;
	const timeAgo = calcTimeAgo(data.lastMoveAt);
	const url = `https://lichess.org/${data.id}`;

	return (
		<div className='flex space-x-4 items-center'>
			<span>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<circle
						cx='10'
						cy='10'
						r='10'
						fill='url(#paint0_linear_814_467)'
					/>
					<path
						d='M13.81 4C12.9095 4.10378 12.1641 4.22396 11.4411 4.74089C5.2839 4.3193 3.69562 8.47737 4.04562 11.1666C4.76323 16.3434 12.0146 17.7266 14.4154 14.2295C12.5164 16.1403 9.49798 16.4025 7.19005 14.9952C4.88211 13.5879 3.74307 10.677 5.06681 8.23753C6.3908 5.7981 8.71813 5.00184 11.2779 5.46614C11.8978 5.11407 12.6108 4.66665 13.2307 4.67485L12.7985 5.88152L16.0516 11.1874C15.9396 12.5913 14.659 12.705 14.659 12.705C14.5126 12.34 14.2422 11.9745 13.4238 11.2063C12.6057 10.4381 8.96839 8.67948 9.3962 7.1823C8.88573 8.91213 12.0266 10.6961 12.9779 11.5678C13.9294 12.4393 14.3621 13.0675 14.4562 13.2452C14.4562 13.2452 16.8522 12.6235 16.4557 11.0288L13.4131 5.65633L13.81 4Z'
						fill='white'
						stroke='white'
						strokeOpacity='0.996078'
						strokeLinejoin='round'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_814_467'
							x1='15'
							y1='13.9286'
							x2='5.35714'
							y2='4.10714'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#272727' />
							<stop offset='1' stopColor='#454545' />
						</linearGradient>
					</defs>
				</svg>
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
