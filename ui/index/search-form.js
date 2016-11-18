var SearchForm = React.createClass({

	getQuery: function() {
		return this.refs.search.value;
	},

	render: function() {
		return (
			<form onSubmit={this.props.search} className="search">
				Search titles: <input type="text" placeholder="Toy Story 3" ref="search"/>
				<button>FIND MY MOVIES!</button>
			</form>
		);
	}
});

module.exports = SearchForm;