import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { term: ""};

        // What on earth?  A completely silly hack for some problem.....
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event: any): void {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event: any): void {
        event.preventDefault();

        // We need to go and get weather data
        this.props.fetchWeather(this.state.term, "us");
        this.setState({term: ""});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="City"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>  
        );
    }
}

function mapDispatchToProps(dispatch: any) {
    return Redux.bindActionCreators({ fetchWeather }, dispatch);
}

export default ReactRedux.connect(null, mapDispatchToProps)(SearchBar);