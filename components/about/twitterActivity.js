import useSWR from 'swr';

import { calcTimeAgo, fetcher } from '@/utils';

function TwitterActivity() {
	const { data, error } = useSWR('/api/twitter', fetcher);

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
						<path
							d='M10 20C8.64583 20 7.35026 19.7363 6.11328 19.209C4.8763 18.6816 3.81185 17.972 2.91992 17.0801C2.02799 16.1882 1.31836 15.1237 0.791016 13.8867C0.263672 12.6497 0 11.3542 0 10C0 8.64583 0.263672 7.35026 0.791016 6.11328C1.31836 4.8763 2.02799 3.81185 2.91992 2.91992C3.81185 2.02799 4.8763 1.31836 6.11328 0.791016C7.35026 0.263672 8.64583 0 10 0C11.3542 0 12.6497 0.263672 13.8867 0.791016C15.1237 1.31836 16.1882 2.02799 17.0801 2.91992C17.972 3.81185 18.6816 4.8763 19.209 6.11328C19.7363 7.35026 20 8.64583 20 10C20 11.3542 19.7363 12.6497 19.209 13.8867C18.6816 15.1237 17.972 16.1882 17.0801 17.0801C16.1882 17.972 15.1237 18.6816 13.8867 19.209C12.6497 19.7363 11.3542 20 10 20ZM15.8789 5C15.8008 5.03906 15.6836 5.11068 15.5273 5.21484L15.1465 5.46875L14.7852 5.66406L14.375 5.80078C13.8932 5.26693 13.3008 5 12.5977 5C11.0742 5 10.3125 5.63802 10.3125 6.91406V8.06641C8.21615 7.96224 6.60807 7.19401 5.48828 5.76172C5.16276 6.10026 5 6.47135 5 6.875C5 7.73438 5.31901 8.38542 5.95703 8.82812C5.87891 8.82812 5.76823 8.83464 5.625 8.84766C5.48177 8.86068 5.36784 8.86068 5.2832 8.84766C5.19857 8.83464 5.10417 8.80208 5 8.75C5 9.34896 5.15951 9.84701 5.47852 10.2441C5.79753 10.6413 6.23698 10.8984 6.79688 11.0156C6.66667 11.1719 6.48438 11.25 6.25 11.25C6.04167 11.25 5.85938 11.1914 5.70312 11.0742C5.70312 11.582 5.94727 11.9759 6.43555 12.2559C6.92383 12.5358 7.47396 12.6823 8.08594 12.6953C7.85156 13.0469 7.50977 13.3105 7.06055 13.4863C6.61133 13.6621 6.13281 13.75 5.625 13.75C5.44271 13.75 5.19206 13.7044 4.87305 13.6133C4.55404 13.5221 4.38802 13.4766 4.375 13.4766C4.58333 13.8932 5.00977 14.2513 5.6543 14.5508C6.29883 14.8503 7.11589 15 8.10547 15C8.97786 15 9.79167 14.847 10.5469 14.541C11.3021 14.235 11.9466 13.8281 12.4805 13.3203C13.0143 12.8125 13.4733 12.2331 13.8574 11.582C14.2415 10.931 14.528 10.2572 14.7168 9.56055C14.9056 8.86393 15 8.17708 15 7.5C15 7.47396 15.0781 7.41862 15.2344 7.33398C15.3906 7.24935 15.5729 7.13542 15.7812 6.99219C15.9896 6.84896 16.1458 6.69922 16.25 6.54297C15.5469 6.54297 15.0781 6.55599 14.8438 6.58203C15.2995 6.30859 15.6445 5.78125 15.8789 5Z'
							fill='url(#paint0_linear_1002_449)'
						/>
						<defs>
							<linearGradient
								id='paint0_linear_1002_449'
								x1='6.42857'
								y1='9.42727e-08'
								x2='14.4643'
								y2='20'
								gradientUnits='userSpaceOnUse'
							>
								<stop stopColor='#00A2F3' />
								<stop offset='1' stopColor='#0687C7' />
							</linearGradient>
						</defs>
					</svg>
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
		<div className='flex space-x-4 items-center'>
			<span>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M10 20C8.64583 20 7.35026 19.7363 6.11328 19.209C4.8763 18.6816 3.81185 17.972 2.91992 17.0801C2.02799 16.1882 1.31836 15.1237 0.791016 13.8867C0.263672 12.6497 0 11.3542 0 10C0 8.64583 0.263672 7.35026 0.791016 6.11328C1.31836 4.8763 2.02799 3.81185 2.91992 2.91992C3.81185 2.02799 4.8763 1.31836 6.11328 0.791016C7.35026 0.263672 8.64583 0 10 0C11.3542 0 12.6497 0.263672 13.8867 0.791016C15.1237 1.31836 16.1882 2.02799 17.0801 2.91992C17.972 3.81185 18.6816 4.8763 19.209 6.11328C19.7363 7.35026 20 8.64583 20 10C20 11.3542 19.7363 12.6497 19.209 13.8867C18.6816 15.1237 17.972 16.1882 17.0801 17.0801C16.1882 17.972 15.1237 18.6816 13.8867 19.209C12.6497 19.7363 11.3542 20 10 20ZM15.8789 5C15.8008 5.03906 15.6836 5.11068 15.5273 5.21484L15.1465 5.46875L14.7852 5.66406L14.375 5.80078C13.8932 5.26693 13.3008 5 12.5977 5C11.0742 5 10.3125 5.63802 10.3125 6.91406V8.06641C8.21615 7.96224 6.60807 7.19401 5.48828 5.76172C5.16276 6.10026 5 6.47135 5 6.875C5 7.73438 5.31901 8.38542 5.95703 8.82812C5.87891 8.82812 5.76823 8.83464 5.625 8.84766C5.48177 8.86068 5.36784 8.86068 5.2832 8.84766C5.19857 8.83464 5.10417 8.80208 5 8.75C5 9.34896 5.15951 9.84701 5.47852 10.2441C5.79753 10.6413 6.23698 10.8984 6.79688 11.0156C6.66667 11.1719 6.48438 11.25 6.25 11.25C6.04167 11.25 5.85938 11.1914 5.70312 11.0742C5.70312 11.582 5.94727 11.9759 6.43555 12.2559C6.92383 12.5358 7.47396 12.6823 8.08594 12.6953C7.85156 13.0469 7.50977 13.3105 7.06055 13.4863C6.61133 13.6621 6.13281 13.75 5.625 13.75C5.44271 13.75 5.19206 13.7044 4.87305 13.6133C4.55404 13.5221 4.38802 13.4766 4.375 13.4766C4.58333 13.8932 5.00977 14.2513 5.6543 14.5508C6.29883 14.8503 7.11589 15 8.10547 15C8.97786 15 9.79167 14.847 10.5469 14.541C11.3021 14.235 11.9466 13.8281 12.4805 13.3203C13.0143 12.8125 13.4733 12.2331 13.8574 11.582C14.2415 10.931 14.528 10.2572 14.7168 9.56055C14.9056 8.86393 15 8.17708 15 7.5C15 7.47396 15.0781 7.41862 15.2344 7.33398C15.3906 7.24935 15.5729 7.13542 15.7812 6.99219C15.9896 6.84896 16.1458 6.69922 16.25 6.54297C15.5469 6.54297 15.0781 6.55599 14.8438 6.58203C15.2995 6.30859 15.6445 5.78125 15.8789 5Z'
						fill='url(#paint0_linear_1002_449)'
					/>
					<defs>
						<linearGradient
							id='paint0_linear_1002_449'
							x1='6.42857'
							y1='9.42727e-08'
							x2='14.4643'
							y2='20'
							gradientUnits='userSpaceOnUse'
						>
							<stop stopColor='#00A2F3' />
							<stop offset='1' stopColor='#0687C7' />
						</linearGradient>
					</defs>
				</svg>
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
