import './style.css';
import axios from 'axios'
import SearchBox from './SearchBox'

// var MovieList = React.createClass({
// 	renderMovieList: function() {
// 		console.log(this.props.buttonClicked)
// 		if (this.props.buttonClicked) {
// 			return (
// 				<div>
// 					<b>Results:</b> <br />
// 					<ul className="movie-list">
// 						{
// 							this.props.movies.map(this.createMovieItem)
// 						}
// 					</ul>
// 				</div>
// 			);
// 		} else {
// 			return (
// 				<div>
// 					<ul className="movie-list">
// 						{
// 							this.props.movies.map(this.createMovieItem)
// 						}
// 					</ul>
// 				</div>
// 			);
// 		}
// 	},

// 	render: function() {
// 		return (
// 			<div>
// 				{this.renderMovieList}
// 			</div>
// 		);
// 	},

// 	createMovieItem: function(movie) {
// 		return (
// 			<li key={movie[imdbID]}>
// 				{movie[Title]} ({movie[Year]})
// 			</li>
// 		);
// 	}
// });

// var SearchBox = React.createClass({
// 	getInitialState: function () {
// 		return {
// 			movies: [],
// 			query: '',
// 			buttonClicked: false
// 		}
// 	},

// 	handleChange(event) {
// 		this.setState({
// 			query: event.target.value
// 		});
// 	},

// 	findMovies: function () {
// 		this.state.buttonClicked = true;
// 		var query = this.state.query;
// 		axios.get('http://www.omdbapi.com/?s='+{query}).then(function(response) {
// 			var movieList = response.data.Search;
// 			this.setState({
// 				movies: movieList,
// 				buttonClicked: true
// 			});
// 		});
// 	},

// 	render: function () {
// 		return (
// 			<div>
// 				<br />
// 				Search titles: <input type="text" placeholder="Toy Story 3" value={this.state.query} onChange={this.handleChange}/>
// 				<br /><br />
// 				<input type="submit" value="FIND MY MOVIES!" onClick={this.findMovies} />
// 				<br />
// 				<br />
// 				<br />
// 				<br />
// 				<MovieList movies={this.state.movies} buttonClicked={this.state.buttonClicked}/>
// 			</div>
// 		);
// 	}
// });

export default class Index extends React.Component {
  	render() {
	    return (
	    	<div>
	    		<SearchBox query={this.props.query}/>
	    	</div>
	    );
	}
}