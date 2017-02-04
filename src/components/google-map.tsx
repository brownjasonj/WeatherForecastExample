import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as SparkLines from 'react-sparklines';
import * as ReactGoogleMaps from 'react-google-maps';


class GoogleMap extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <ReactGoogleMaps.GoogleMapLoader
                containerElement={<div style={{height: '100%'}}/>}
                googleMapElement={
                    <ReactGoogleMaps.GoogleMap defaultZoom={12} defaultCenter={{lat: this.props.lat, lng: this.props.lon}} />
                }
            />
        );
    }
}

export { GoogleMap }