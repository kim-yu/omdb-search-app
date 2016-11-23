export default function getMoviesSuccess(movies) {
	return {
		type: 'GET_MOVIES_SUCCESS',
		movies
	}
}