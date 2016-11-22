var SearchForm = React.createClass({

	getQuery: function() {
		return this.refs.search.value;
	},

	render: function() {
		return (
			<div>
				<form onSubmit={this.props.search} className="search">
					Search titles: <input type="text" placeholder="Toy Story 3" ref="search"/>
					<br />
					<br />
					<button>FIND MY MOVIES!</button>
				</form>
			</div>
		);
	}
});

export default SearchForm;