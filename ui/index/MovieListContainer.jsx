import MovieList from './MovieList';
import { connect } from 'react-redux';
import store from '../store';
import { getMoviesSuccess, movieSelected } from '../actions';

const MovieListContainer = React.createClass({
	render: function() {
		let searchResults = store.getState();
		return (
			<div className="movie-list-container">
				<MovieList movies={this.props.movies} selectMovie={this.props.selectedMovie}/>
			</div>
		);
	}
});

const mapStateToProps = function(store) {
	return {
		movies: store.movies,
		selectedMovie: store.selectedMovie
	};
};

export default connect(mapStateToProps)(MovieListContainer);