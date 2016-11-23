import MovieList from './MovieList';
import { connect } from 'react-redux';
import store from '../store';
import { getMoviesSuccess } from '../actions';

const MovieListContainer = React.createClass({
	render: function() {
		let searchResults = store.getState();
		return (
			<div className="movie-list-container">
				<MovieList movies={this.props.movies} />
			</div>
		);
	}
});

const mapStateToProps = function(store) {
	return {
		movies: store.movies
	};
};

export default connect(mapStateToProps)(MovieListContainer);