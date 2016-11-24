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
						<div key={movie.imdbID} onClick={boundMovieClick}>
							<button key={movie.imdbID} className="movie-list-item">
								<div className="details">
									{movie.Title} ({movie.Year})
								</div>
							</button>
						</div>
					);
				})}
			</div>
		);
	}
});

export default MovieList;