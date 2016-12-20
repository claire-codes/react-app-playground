import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Convert kg to stone</h2>
                </div>
                <p className="App-intro">{this.state.value}</p>
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>&nbsp;kg
                </div>
            </div>
        );
    }
}

export default App;
