import * as React from 'react'

import SearchBar from '../containers/search-bar';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}
