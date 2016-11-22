const initialState = {
	movies: []
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  	case 'GET_MOVIES_SUCCESS':
  		return Object.assign({}, state, { movies: action.movies });
    default: return state;
  }
}