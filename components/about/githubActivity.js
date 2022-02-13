import useSWR from 'swr';
import Image from 'next/image';

import { calcTimeAgo, fetcher } from 'util';

function GithubActivity() {
	const { data, error } = useSWR('/api/github', fetcher);

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

	data = data[0];
	const timeAgo = calcTimeAgo(data.created_at);
	const repoUrl = data.repo.url.replace('api.', '').replace('/repos', '');
	const repoLink = (
		<a
			href={repoUrl}
			target='_blank'
			rel='noopener noreferrer'
			className='lnk'
		>
			{data.repo.name}
		</a>
	);

	switch (data.type) {
		case 'PushEvent': {
			const noOfCommits = data.payload.size;
			const commitWord = noOfCommits > 1 ? 'commits' : 'commit';
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
						Pushed {noOfCommits} {commitWord} in{' '}
						<a
							className='lnk'
							href={
								repoUrl + '/tree/' + data.payload.ref.slice(11)
							}
							target='_blank'
							rel='noopener noreferrer'
						>
							{data.repo.name}
						</a>
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'WatchEvent': {
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
						Starred a repo {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'CreateEvent': {
			const isBranch = data.payload.ref_type === 'branch';
			if (isBranch) {
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
							Created a branch{' '}
							<a
								className='lnk'
								href={repoUrl + '/tree/' + data.payload.ref}
								target='_blank'
								rel='noopener noreferrer'
							>
								{data.payload.ref}
							</a>{' '}
							in {repoLink}
							<span className='text-gray-500'> - {timeAgo}</span>
						</p>
					</div>
				);
			} else {
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
							Created a repo {repoLink}
							<span className='text-gray-500'> - {timeAgo}</span>
						</p>
					</div>
				);
			}
		}

		case 'DeleteEvent': {
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
						Deleted a {data.payload.ref_type} from {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'ForkEvent': {
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
						Forked a repo {repoLink} to{' '}
						<a
							className='lnk'
							href={data.payload.forkee.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							{data.payload.forkee.full_name}
						</a>
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'PullRequestEvent': {
			const praAction =
				data.payload.action.charAt(0).toUpperCase() +
				data.payload.action.slice(1);
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
						{praAction} a{' '}
						<a
							className='lnk'
							href={data.payload.pull_request.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							pull request
						</a>{' '}
						in {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'PullRequestReviewCommentEvent': {
			const prrcAction =
				data.payload.action.charAt(0).toUpperCase() +
				data.payload.action.slice(1);
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
						{prrcAction} a{' '}
						<a
							className='lnk'
							href={data.payload.comment.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							comment
						</a>{' '}
						on their pull request in {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'IssuesEvent': {
			const ieAction =
				data.payload.action.charAt(0).toUpperCase() +
				data.payload.action.slice(1);
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
						{ieAction} an{' '}
						<a
							className='lnk'
							href={data.payload.issue.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							issue
						</a>{' '}
						in {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'IssueCommentEvent': {
			const iceAction =
				data.payload.action.charAt(0).toUpperCase() +
				data.payload.action.slice(1);
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
						{iceAction} a{' '}
						<a
							className='lnk'
							href={data.payload.comment.html_url}
							target='_blank'
							rel='noopener noreferrer'
						>
							comment
						</a>{' '}
						on an issue in {repoLink}
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}

		case 'PublicEvent': {
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
						Made {repoLink} public
						<span className='text-gray-500'> - {timeAgo}</span>
					</p>
				</div>
			);
		}
		default:
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
}

export default GithubActivity;
