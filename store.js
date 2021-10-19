export const initialState = {
	count: 1,
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			throw new Error();
	}
};

export const increment = () => {
	return { type: 'increment' };
};

export const decrement = () => {
	return { type: 'decrement' };
};
