const initialState = {
	query: '',
	movies: [],
	selectedMovie: {},
	viewMovie: false
}

export default function reducer(state=initialState, action) {
  switch (action.type) {
  	case 'GET_QUERY_SUCCESS':
  		return Object.assign({}, state, { query: action.query });
  	case 'GET_MOVIES_SUCCESS':
  		return Object.assign({}, state, { movies: action.movies });
  	case 'MOVIE_SELECTED':
  		return Object.assign({}, state, { selectedMovie: action.movie, viewMovie: true });
  	case 'CLOSE_VIEW_MOVIE':
  		return Object.assign({}, state, { viewMovie: false });
  }

  return state;

}