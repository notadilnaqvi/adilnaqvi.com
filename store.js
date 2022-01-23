export const initialState = {
	routes: [],
	achievements: [],
	pieces: [],
};

// Actions
const ADD_ROUTE = 'achievements/add-route';
const HYDRATE_STORE = 'achievements/hydrate-store';
const ADD_ACHIEVEMENT = 'achievements/add-achievement';
const ADD_CHESS_PIECE = 'achievements/add-chess-piece';

// Action creators
export const addRoute = route => {
	return { type: ADD_ROUTE, payload: { route } };
};

export const hydrateStore = data => {
	return { type: HYDRATE_STORE, payload: { data } };
};

export const addAchievement = achievement => {
	return { type: ADD_ACHIEVEMENT, payload: { achievement } };
};

export const addChessPiece = piece => {
	return { type: ADD_CHESS_PIECE, payload: { piece } };
};

// Reducers
export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_ROUTE: {
			// If route is already added, don't do anything
			if (state.routes?.includes(action.payload.route)) {
				return { ...state };
			}

			const _achievements = [...state.achievements];
			if ([...state.routes, action.payload.route].length === 5) {
				_achievements = [..._achievements, 'explorer'];
			}

			if (action.payload.route === '/achievements') {
				_achievements = [..._achievements, 'adventurer'];
			}

			if (action.payload.route === '/teapot') {
				_achievements = [..._achievements, 'teapot'];
			}

			if (action.payload.route === '/hacked') {
				_achievements = [..._achievements, 'hacker'];
			}

			if (action.payload.route === '/_offline') {
				_achievements = [..._achievements, 'airplane-mode'];
			}

			return {
				...state,
				routes: [...state.routes, action.payload.route],
				achievements: _achievements,
			};
		}
		case HYDRATE_STORE: {
			return {
				...action.payload.data,
			};
		}
		case ADD_ACHIEVEMENT: {
			// If achievement is already added, don't do anything
			if (state.achievements?.includes(action.payload.achievement)) {
				return { ...state };
			}

			return {
				...state,
				achievements: [
					...state.achievements,
					action.payload.achievement,
				],
			};
		}
		case ADD_CHESS_PIECE: {
			// If piece is already added, don't do anything
			if (state.pieces?.includes(action.payload.piece)) {
				return { ...state };
			}

			const _achievements = [...state.achievements];
			if ([...state.pieces, action.payload.piece].length === 6) {
				_achievements = [..._achievements, 'grandmaster'];
			}

			return {
				...state,
				pieces: [...state.pieces, action.payload.piece],
				achievements: _achievements,
			};
		}
		default:
			return { ...state };
	}
};
