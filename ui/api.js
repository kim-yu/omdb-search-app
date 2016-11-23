import store from './store'
import getMoviesSuccess from './actions'

export function searchMovies(query='') {
	fetch('http://www.omdbapi.com/?s='+query).then((response) => {
		return response.json().then((json) => {
			store.dispatch(getMoviesSuccess(json.Search));
			return json.Search;
		});
	})
}