export function getMoviesSuccess(movies) {
	return {
		type: 'GET_MOVIES_SUCESS',
		movies
	}
}