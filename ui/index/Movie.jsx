const MovieDetails = React.createClass({
	render: function() {
		var movie = {this.props.params.movieId};
		return (
			<div>
				<img src={movie[Poster]} />
				<h1>{movie[Title]</h1>
				Rated: {movie[Rated]}<br />
				Plot: {movie[Plot]}<br />
				Released: {movie[Released]}<br />
				Runtime: {movie[Runtime]}<br />
				Genre: {movie[Genre]}<br />
				Director: {movie[Director]}<br />
				Writer: {movie[Writer]}<br />
				Language: {movie[Language]}<br />
				Awards: {movie[Awards]}<br />
				IMdB Rating: {movie[imdbRating]}
			</div>
		);
	}
});

export default MovieDetails;