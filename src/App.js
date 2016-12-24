import React, {Component} from 'react';
import weightConverter from '../weightConverter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg: 0,
            stone: 0,
            lbs: 0
        };

        this.handleKgChange = this.handleKgChange.bind(this);
        this.handleStoneChange = this.handleStoneChange.bind(this);
        this.handleLbsChange = this.handleLbsChange.bind(this);
    }

    handleKgChange(event) {
        this.setState({kg: event.target.value});
        let tmp = weightConverter.kgToStoneLbs(event.target.value);
        this.setState({stone: tmp.stone, lbs: tmp.lbs});
    }

    handleStoneChange(event) {
        this.setState({stone: event.target.value});
        let tmp = weightConverter.stoneLbsToKg(event.target.value, this.state.lbs);
        this.setState({kg: tmp});
    }

    handleLbsChange(event) {
        this.setState({lbs: event.target.value});
        let tmp = weightConverter.stoneLbsToKg(this.state.stone, event.target.value);
        this.setState({kg: tmp});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Convert kg to stone</h2>
                </div>
                <div>
                    <input
                        type="number"
                        onChange={this.handleStoneChange}
                        value={this.state.stone}
                    />
                    &nbsp;stone
                </div>
                <div>
                    <input
                        type="number"
                        onChange={this.handleLbsChange}
                        value={this.state.lbs}
                    />
                    &nbsp;lbs
                </div>
                <div>
                    <input
                        type="number"
                        onChange={this.handleKgChange}
                        value={this.state.kg}
                    />
                    &nbsp;kg
                </div>
            </div>
        );
    }
}

export default App;
