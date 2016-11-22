import './style.css';
import store from '../store'
import getMoviesSuccess from '../actions'
import SearchForm from './SearchForm'
import SearchFormContainer from './SearchFormContainer'
import MovieList from './MovieList'
import MovieListContainer from './MovieListContainer'

export default class Index extends React.Component {
  	render() {
	    return (
	    	<div>
	    		<SearchFormContainer />
	    		<MovieListContainer />
	    	</div>
	    );
	}
}