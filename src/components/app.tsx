import * as React from 'react'

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

export default class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
