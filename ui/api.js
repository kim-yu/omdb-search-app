import store from './store'
import { getMoviesSuccess, movieSelected } from './actions'

export function searchMovies(query='') {
	fetch('http://www.omdbapi.com/?s='+query).then((response) => {
		return response.json().then((json) => {
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