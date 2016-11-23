import SearchForm from './SearchForm'
import * as api from '../api'

var SearchFormContainer = React.createClass({

	getInitialState: function() {
		return {
			buttonClicked: false
		}
	},
	
	search: function(event) {
		event.preventDefault();

		let query = this.refs.child.getQuery();

		api.searchMovies(query);
		this.setState({buttonClicked: true});
	},

	render: function() {
		return (
			<div>
				<SearchForm search={this.search} ref="child" />
			</div>
		);
	}
});

export default SearchFormContainer;