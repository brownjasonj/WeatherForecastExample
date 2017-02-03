import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as SparkLines from 'react-sparklines';

class WeatherList extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    renderWeather(cityData) {
        const cityName: string = cityData.city.name;
        const temps: number[] = cityData.list.map((weather) => weather.main.temp);
        console.log("Temp: " + temps);
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td>
                    <SparkLines.Sparklines data={cityData.list.map((weather) => weather.main.temp)}>
                        <SparkLines.SparklinesLine color="red" />    
                    </SparkLines.Sparklines>  
                </td>
                <td>
                    <SparkLines.Sparklines data={cityData.list.map((weather) => weather.main.pressure)}>
                        <SparkLines.SparklinesLine color="blue" />    
                    </SparkLines.Sparklines>  
                </td>
                <td>
                    <SparkLines.Sparklines data={cityData.list.map((weather) => weather.main.humidity)}>
                        <SparkLines.SparklinesLine color="black" />    
                    </SparkLines.Sparklines>  
                </td>
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