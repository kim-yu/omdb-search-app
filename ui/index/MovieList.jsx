export default function(props) {
	return (
		<div className="data-list">
			{props.movies.map(movie => {
				return (
					<div>
						<div key={movie.imdbID} className="movie-list-item">
							<div className="details">
								{movie.Title} ({movie.Year})
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}