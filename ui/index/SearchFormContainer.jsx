import SearchForm from './SearchForm'
import * as api from '../api'

var SearchFormContainer = React.createClass({

	search: function(event) {
		event.preventDefault();

		let query = this.refs.child.getQuery();

		api.searchMovies(query);
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