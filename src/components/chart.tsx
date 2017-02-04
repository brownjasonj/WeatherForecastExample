import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as SparkLines from 'react-sparklines';
import * as Lodash from 'lodash';

class Chart extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    private average(data: number[]) {
        return Lodash.round(Lodash.sum(data)/data.length);
    }

    render() {
        return (
            <div>
                <SparkLines.Sparklines data={this.props.data} width={100} height={40} margin={5}>
                    <SparkLines.SparklinesLine color={this.props.colour} /> 
                    <SparkLines.SparklinesReferenceLine type="avg" />
                </SparkLines.Sparklines>
                <div>{this.average(this.props.data)} {this.props.units}
                </div>
            </div>            
        );
    }
}

export { Chart }