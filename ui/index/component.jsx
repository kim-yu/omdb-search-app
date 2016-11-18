import './style.css';
import SearchBox from './SearchBox'

export default class Index extends React.Component {
  	render() {
	    return (
	    	<div>
	    		<SearchBox query={this.props.query}/>
	    	</div>
	    );
	}
}