import store from '../store';

var Results = React.createClass({
	render: function() {
		return (
			<div id="results" className="search-results">
				<h4>Results</h4>
			</div>
		);
	}
});

var SearchForm = React.createClass({
	getInitialState: function() {
		return {
			showResults: false
		};
	},

	getQuery: function() {
		this.setState({ showResults: true });
		return this.refs.search.value;
	},

	render: function() {
		let originalQuery = store.getState().query;
		if (originalQuery == '') {
			originalQuery = '';
		}
		return (
			<div>
				<form onSubmit={this.props.search} className="search">
					Search titles: <input type="text" placeholder="Toy Story 3" defaultValue={originalQuery} ref="search"/>
					<br />
					<br />
					<button>FIND MY MOVIES!</button>
				</form>
				{ this.state.showResults ? <Results /> : null }
			</div>
		);
	}
});

export default SearchForm;