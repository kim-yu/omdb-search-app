import axios from 'axios';
import { connect } from 'react-redux'
import store from '../store'
import reducer from '../reducer'
import MovieList from './MovieList'

var SearchBox = React.createClass({
	getInitialState: function () {
		return {
			movies: [],
			query: '',
			buttonClicked: false
		}
	},

	handleChange(event) {
		this.setState({
			query: event.target.value
		});
	},

	findMovies: function () {
		this.state.buttonClicked = true;
		var query = this.state.query;
		axios.get('http://www.omdbapi.com/?s='+{query}).then(function(response) {
			store.dispatch({
				type: 'MOVIE_LIST_SUCCESS',
				movies: response.data.Search,
				buttonClicked: true
			});
		});
	},

	render: function () {
		return (
			<div>
				<br />
				Search titles: <input type="text" placeholder="Toy Story 3" value={this.state.query} onChange={this.handleChange}/>
				<br /><br />
				<input type="submit" value="FIND MY MOVIES!" onClick={this.findMovies} />
				<br />
				<br />
				<br />
				<br />
				<MovieList movies={this.props.movies} buttonClicked={this.props.buttonClicked}/>
			</div>
		);
	}
});

export default SearchBox;