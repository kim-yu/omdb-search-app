import store from './store'
import { getMoviesSuccess } from './actions'

export function getMovies() {
	return fetch('http://www.omdbapi.com/?s='+query).then((response) => {
		return response.json().then((json) => {
			store.dispatch(getMoviesSuccess(json.Search));
			return json.Search;
		});
	});
}

export function searchMovies(query='') {
	return fetch('http://www.omdbapi.com/?s='+query).then((response) => {
		return response.json().then((json) => {
			store.dispatch(getMoviesSuccess(json.Search));
			return json.Search;
		});
	});
}