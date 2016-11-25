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
				<button className="x-button" onClick={this.handleClick}>
					<img src="https://cdn1.iconfinder.com/data/icons/nuove/128x128/actions/fileclose.png" />
				</button><br /><br />
				<img src={movie.Poster} className="poster" />
				<div className="movie-details">
					<h4>Title: {movie.Title}</h4><br />
					Rated: {movie.Rated}<br /><br />
					Plot: {movie.Plot}<br /><br />
					Released: {movie.Released}<br /><br />
					Runtime: {movie.Runtime}<br /><br />
					Genre: {movie.Genre}<br /><br />
					Director: {movie.Director}<br /><br />
					Writer: {movie.Writer}<br /><br />
					Language: {movie.Language}<br /><br />
					Awards: {movie.Awards}<br /><br />
					IMDb Rating: {movie.imdbRating}
				</div>
			</div>
		);
	}
});

export default MovieProfile;