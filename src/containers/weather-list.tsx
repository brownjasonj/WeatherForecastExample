import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as SparkLines from 'react-sparklines';

import { Chart } from '../components/chart';
import { GoogleMap } from '../components/google-map';

class WeatherList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    renderWeather(cityData) {
        const cityName: string = cityData.city.name;
        const temps: number[] = cityData.list.map((weather) => weather.main.temp);
        const pressures: number[] = cityData.list.map((weather) => weather.main.pressure);
        const humidities: number[] = cityData.list.map((weather) => weather.main.humidity);
        const {lon, lat} = cityData.city.coord;

        console.log("Temp: " + temps);
        return (
            <tr key={cityName}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                <td><Chart data={temps} colour="orange" units="K"/></td>
                <td><Chart data={pressures} colour="green" units="(hPa)"/></td>
                <td><Chart data={humidities} colour="black" units="(%)"/></td>
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
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
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