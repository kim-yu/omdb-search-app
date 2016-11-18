import SearchForm from './search-form'

var SearchFormContainer = React.createClass({
	
	search: function(event) {
		event.preventDefault();

		let query = this.refs.child.getQuery();

		fetch('http://www.omdbapi.com/?s=${query}').then((response) => {
			return response.json().then((json) => {
				store.dispatch(getMoviesSuccess(json.Search));
				return json;
			});
		})
	},

	render: function() {
		return (
			<SearchForm search={this.search} ref="child"/>
		);
	}
});

module.exports = searchFormContainer;