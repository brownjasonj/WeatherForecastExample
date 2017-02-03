import * as React from 'react';
import * as ReactRedux from 'react-redux';

class WeatherList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }

    public render() {
        console.log("got it" + this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default ReactRedux.connect(mapStateToProps)(WeatherList);