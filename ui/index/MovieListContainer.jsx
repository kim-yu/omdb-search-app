import MovieList from './MovieList'

var MovieListContainer = React.createClass({
	componentDidMount: function() {

	},

	render: function() {
		return (
			<div>
				<h4>Results</h4>
				<MovieList movies={this.movies} />
			</div>
		);
	}
});

export default MovieListContainer;