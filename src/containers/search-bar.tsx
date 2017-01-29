import * as React from 'react';

export default class SearchBar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { term: ""};

        // What on earth?  A completely silly hack for some problem.....
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event: any) : void {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <form className="input-group">
                <input
                    placeholder="Get a five day forecast in your favorite cities"
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