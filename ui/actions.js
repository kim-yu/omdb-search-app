export function getQuerySuccess(query) {
	return {
		type: 'GET_QUERY_SUCCES',
		query
	}
}

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

export function closeViewMovie() {
	return {
		type: 'CLOSE_VIEW_MOVIE'
	}
}