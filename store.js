// Actions
const ADD_ROUTE = 'achievements/add-route';
const ADD_ACHIEVEMENT = 'achievements/add-achievement';

// Action creators
export const addRoute = route => {
	return { type: ADD_ROUTE, payload: { route } };
};

// Reducers
export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_ROUTE: {
			// If route is already added, don't do anything
			if (state.visitedRoutes.includes(action.payload.route)) {
				return { ...state };
			}

			if ([...state.visitedRoutes, action.payload.route].length === 5) {
				return {
					...state,
					visitedRoutes: [
						...state.visitedRoutes,
						action.payload.route,
					],
					achievements: [...state.achievements, 'explorer'],
				};
			}
			return {
				...state,
				visitedRoutes: [...state.visitedRoutes, action.payload.route],
			};
		}
		case ADD_ACHIEVEMENT: {
			return {
				...state,
				achievements: [
					...state.achievements,
					action.payload.achievement,
				],
			};
		}
		default:
			return { ...state };
	}
};

// Get initial state from local storage, else use default initial state
const defaultInitialState = {
	visitedRoutes: [],
	achievements: [],
};
function getInitialState() {
	if (typeof window === 'undefined') {
		return defaultInitialState;
	}
	let initialState = {};
	if (window.localStorage.getItem('visitedRoutes') === null) {
		initialState.visitedRoutes = [];
	} else {
		initialState.visitedRoutes = JSON.parse(
			window.localStorage.getItem('visitedRoutes')
		);
	}
	if (window.localStorage.getItem('achievements') === null) {
		initialState.achievements = [];
	} else {
		initialState.achievements = JSON.parse(
			window.localStorage.getItem('achievements')
		);
	}
	return initialState;
}

export const initialState = getInitialState();
