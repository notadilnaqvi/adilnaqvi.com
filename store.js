/**
 * Initial states
 */

export const initialState = {
	routes: [],
	pieces: [],
	achievements: [],
};

/**
 * Actions
 */
const HYDRATE_STORE = 'hydrate-store';
const ADD_ROUTE = 'achievements/add-route';
const ADD_CHESS_PIECE = 'achievements/add-chess-piece';
const ADD_ACHIEVEMENT = 'achievements/add-achievement';

/**
 * Action creators
 */
export function hydrateStore(data) {
	return { type: HYDRATE_STORE, payload: { data } };
}

export function addRoute(route) {
	return { type: ADD_ROUTE, payload: { route } };
}

export function addChessPiece(piece) {
	return { type: ADD_CHESS_PIECE, payload: { piece } };
}

export function addAchievement(achievement) {
	return { type: ADD_ACHIEVEMENT, payload: { achievement } };
}

/**
 * Reduers
 */
export function reducer(state, action) {
	switch (action.type) {
		case HYDRATE_STORE: {
			return {
				...action.payload.data,
			};
		}
		case ADD_ROUTE: {
			// If the route is already added, don't do anything
			if (state.routes?.includes(action.payload.route)) {
				return { ...state };
			}

			const _routes = [...state.routes, action.payload.route];
			let _achievements = [...state.achievements];

			// Add the Explorer achievement if 5 routes have been visited
			if (_routes.length === 5) {
				_achievements = [..._achievements, 'explorer'];
			}

			if (action.payload.route === '/fun') {
				_achievements = [..._achievements, 'adventurer'];
			} else if (action.payload.route === '/teapot') {
				_achievements = [..._achievements, 'teapot'];
			} else if (action.payload.route === '/pole') {
				_achievements = [..._achievements, 'hacker'];
			} else if (action.payload.route === '/_offline') {
				_achievements = [..._achievements, 'airplane-mode'];
			}

			return {
				...state,
				routes: _routes,
				achievements: _achievements,
			};
		}
		case ADD_CHESS_PIECE: {
			// If the piece is already added, don't do anything
			if (state.pieces?.includes(action.payload.piece)) {
				return { ...state };
			}

			const _pieces = [...state.pieces, action.payload.piece];
			let _achievements = [...state.achievements];

			// Add the Grandmaster achievement if 6 pieces have been found
			if (_pieces.length === 6) {
				_achievements = [..._achievements, 'grandmaster'];
			}

			return {
				...state,
				pieces: _pieces,
				achievements: _achievements,
			};
		}
		case ADD_ACHIEVEMENT: {
			// If the achievement is already added, don't do anything
			if (state.achievements?.includes(action.payload.achievement)) {
				return { ...state };
			}

			const _achievements = [
				...state.achievements,
				action.payload.achievement,
			];

			return {
				...state,
				achievements: _achievements,
			};
		}
		default:
			return { ...state };
	}
}
