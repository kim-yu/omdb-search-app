import * as api from '../api'

var MovieList = React.createClass({
	onMovieClick: function(imdbID, e) {
		api.getMovie(imdbID);
	},

	render: function() {
		let movies = this.props.movies;
		return (
			<div className="movie-list">
				{movies.map((movie) => {
					let boundMovieClick = this.onMovieClick.bind(this, movie.imdbID);
					return (
						<button key={movie.imdbID} className="movie-list-item" onClick={boundMovieClick}>
							<div className="details">
								{movie.Title.toUpperCase()} ({movie.Year})
							</div>
						</button>
					);
				})}
			</div>
		);
	}
});

export default MovieList;