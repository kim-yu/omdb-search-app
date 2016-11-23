export default function(props) {
	return (
		<div className="movie-list">
			{props.movies.map(movie => {
				return (
					<div key={movie.imdbID}>
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