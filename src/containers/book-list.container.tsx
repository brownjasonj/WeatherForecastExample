import * as React from 'react';
import * as Redux from 'react-redux';

class BookList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    private renderList()  {
        return this.props.books.map((book: any) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    public render() {
        return (
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }
}

// the mapStateToProps function takes an application state and 
// selects a specific sub state for the a specific component
// so functionally we have:
//
//      maptStateToProps: Application State => Container State
//
function mapStateToProps(state: any) {
    // Whatever is returned will show up as props 
    // inside of BookList
    return {
        books: state.books
    };
}

// the Redux connect function in essence takes the app state to container state function
// calls it to get the container state and then binds the contrainer state the props value 
// of the container......conceptually very simple, but very complicated when expressed in code!
export default Redux.connect(mapStateToProps)(BookList);