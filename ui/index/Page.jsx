import SearchFormContainer from './SearchFormContainer';
import MovieListContainer from './MovieListContainer';
import MovieProfile from './MovieProfile';
import store from '../store';

var Page = React.createClass({
	render: function() {
		if (store.getState().viewMovie) {
			return (
				<div>
					<MovieProfile />
				</div>
			);
		} else {
			return (
				<div>
					<SearchFormContainer />
					<MovieListContainer />
				</div>
			);
		}
	}
});

export default Page;