export function getMoviesSuccess(movies) {
	return {
		type: 'GET_MOVIES_SUCCESS',
		movies
	}
}

export function movieSelected(movie) {
	return {
		type: 'MOVIE_SELECTED',
		movie
	}
}