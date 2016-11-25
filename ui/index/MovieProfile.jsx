import store from '../store';
import * as api from '../api';

var MovieProfile = React.createClass({
	handleClick: function() {
		api.closeMovieProfile();
	},

	render: function() {
		let movie = store.getState().selectedMovie
		return (
			<div className="movie-profile">
				<button className="x-button" onClick={this.handleClick}>X</button>
				<img src={movie.Poster} className="poster" />
				<div className="movie-details">
					<h4>Title: {movie.Title}</h4><br />
					Rated: {movie.Rated}<br />
					Plot: {movie.Plot}<br />
					Released: {movie.Released}<br />
					Runtime: {movie.Runtime}<br />
					Genre: {movie.Genre}<br />
					Director: {movie.Director}<br />
					Writer: {movie.Writer}<br />
					Language: {movie.Language}<br />
					Awards: {movie.Awards}<br />
					IMDb Rating: {movie.imdbRating}<br />
				</div>
			</div>
		);
	}
});

export default MovieProfile;