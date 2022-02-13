/**
 * Credits to TheBrain https://stackoverflow.com/a/12475270
 */

const calcTimeAgo = time => {
	switch (typeof time) {
		case 'number':
			break;
		case 'string':
			time = +new Date(time);
			break;
		case 'object':
			if (time.constructor === Date) time = time.getTime();
			break;
		default:
			time = +new Date();
	}
	const timeFormats = [
		[60, 'just now', null],
		[120, 'a min ago', null],
		[3600, 'min', 60],
		[7200, 'an hour ago', null],
		[86400, 'hrs', 3600],
		[172800, 'a day ago', null],
		[604800, 'days', 86400],
		[1209600, 'a week ago', null],
		[2419200, 'weeks', 604800],
		[4838400, 'a month ago', null],
		[29030400, 'months', 2419200],
		[58060800, 'a year ago', null],
		[2903040000, 'years', 29030400],
	];
	const diff = Math.floor((+new Date() - time) / 1000);

	let timeAgo = '';
	for (const format of timeFormats) {
		if (diff < format[0]) {
			timeAgo = format[2]
				? Math.floor(diff / format[2]) + ' ' + format[1] + ' ago'
				: format[1];
			break;
		}
	}
	return timeAgo;
};

const fetcher = url => fetch(url).then(res => res.json());

export { calcTimeAgo, fetcher };
