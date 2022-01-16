export const initialState = {
	routes: [],
	achievements: [],
};

// Actions
const ADD_ROUTE = 'achievements/add-route';
const HYDRATE_STORE = 'achievements/hydrate-store';

// Action creators
export const addRoute = route => {
	return { type: ADD_ROUTE, payload: { route } };
};

export const hydrateStore = newStore => {
	return { type: HYDRATE_STORE, payload: newStore };
};

// Reducers
export const reducer = (state, action) => {
	switch (action.type) {
		case ADD_ROUTE: {
			// If route is already added, don't do anything
			if (state.routes?.includes(action.payload.route)) {
				return { ...state };
			}

			if ([...state.routes, action.payload.route].length === 5) {
				return {
					...state,
					routes: [...state.routes, action.payload.route],
					achievements: [...state.achievements, 'explorer'],
				};
			}
			return {
				...state,
				routes: [...state.routes, action.payload.route],
			};
		}
		case HYDRATE_STORE: {
			return {
				...action.payload,
			};
		}
		default:
			return { ...state };
	}
};
