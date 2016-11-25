import store from './store'
import { getQuerySuccess, getMoviesSuccess, movieSelected, closeViewMovie } from './actions'

export function searchMovies(query='') {
	fetch('http://www.omdbapi.com/?s='+query).then((response) => {
		return response.json().then((json) => {
			store.dispatch(getQuerySuccess(query));
			store.dispatch(getMoviesSuccess(json.Search));
			return json.Search;
		});
	})
}

export function getMovie(imdbID) {
	fetch('http://www.omdbapi.com/?i='+imdbID+'&plot=full&r=json').then((response) => {
		return response.json().then((json) => {
			store.dispatch(movieSelected(json));
			return json;	
		});
	})
}

export function closeMovieProfile() {
	store.dispatch(closeViewMovie());
}