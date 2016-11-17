var MovieList = React.createClass({
	renderMovieList: function() {
		console.log(this.props.buttonClicked)
		if (this.props.buttonClicked) {
			return (
				<div>
					<b>Results:</b> <br />
					<ul className="movie-list">
						{
							this.props.movies.map(this.createMovieItem)
						}
					</ul>
				</div>
			);
		} else {
			return (
				<div>
					<ul className="movie-list">
						{
							this.props.movies.map(this.createMovieItem)
						}
					</ul>
				</div>
			);
		}
	},

	render: function() {
		return (
			<div>
				{this.renderMovieList}
			</div>
		);
	},

	createMovieItem: function(movie) {
		return (
			<li key={movie[imdbID]}>
				{movie[Title]} ({movie[Year]})
			</li>
		);
	}
});

export default MovieList;