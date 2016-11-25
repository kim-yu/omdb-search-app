import SearchFormContainer from './SearchFormContainer';
import MovieListContainer from './MovieListContainer';
import MovieProfile from './MovieProfile';
import store from '../store';
import { connect } from 'react-redux';


const Page = React.createClass({
	render: function() {
		if (this.props.viewMovie) {
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

const mapStateToProps = function(store) {
	return {
		viewMovie: store.viewMovie
	};
};

export default connect(mapStateToProps)(Page);