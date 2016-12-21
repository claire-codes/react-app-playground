import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kg: 0,
            stone: 0
        };
        this.KG_TO_STONE = 6.35029318;

        this.handleKgChange = this.handleKgChange.bind(this);
        this.handleStoneChange = this.handleStoneChange.bind(this);
    }

    handleKgChange(event) {
        this.setState({kg: event.target.value});
        let tmp = event.target.value / this.KG_TO_STONE;
        console.log(this.state.kg);
        this.setState({stone: tmp});
    }

    handleStoneChange(event) {
        this.setState({stone: event.target.value});
        let tmp = event.target.value * this.KG_TO_STONE;
        console.log(this.state.stone);
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
                        type="text"
                        onChange={this.handleStoneChange}
                        value={this.state.stone}
                    />
                    &nbsp;stone
                </div>
                <div>
                    {/* Why if I set a value does it not allow me to edit it? */}
                    <input
                        type="text"
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
