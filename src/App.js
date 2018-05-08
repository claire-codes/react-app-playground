import React, {Component} from 'react';
import styled from 'styled-components';

import weightConverter from './weightConverter';
import logo from './logo.svg';
import './App.css';

const InputHolder = styled.div`
  margin: 20px;
`;

const InputField = styled.input`
  background-color: #61dafb;
  border: none;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: inline-block;
  margin-bottom: 15px;
  margin-left: 10px;
`;


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
        if (event.target.value) {
            let tmp = weightConverter.kgToStoneLbs(event.target.value);
            this.setState({stone: tmp.stone, lbs: tmp.lbs});
        }
    }

    handleStoneChange(event) {
        this.setState({stone: event.target.value});
        if (event.target.value) {
            let tmp = weightConverter.stoneLbsToKg(event.target.value, this.state.lbs);
            this.setState({kg: tmp});
        }
    }

    handleLbsChange(event) {
        this.setState({lbs: event.target.value});
        if (event.target.value) {
            let tmp = weightConverter.stoneLbsToKg(this.state.stone, event.target.value);
            this.setState({kg: tmp});
        }
    }

    componentDidMount() {
        this.nameInput.focus();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Convert kg to stone</h2>
                </div>
                <InputHolder>
                    <InputHolder>
                        <InputField
                            type="number"
                            onChange={this.handleKgChange}
                            value={this.state.kg}
                            className="z-kg-input"
                            innerRef={(input) => { this.nameInput = input; }}
                        />
                        &nbsp;kg
                    </InputHolder>
                    <InputWrapper>
                        <InputField
                            type="number"
                            onChange={this.handleStoneChange}
                            value={this.state.stone}
                            className="z-stone-input"
                        />
                        &nbsp;stone
                    </InputWrapper>
                    <InputWrapper>
                        <InputField
                            type="number"
                            onChange={this.handleLbsChange}
                            value={this.state.lbs}
                            className="z-lbs-input"
                        />
                        &nbsp;lbs
                    </InputWrapper>
                </InputHolder>
            </div>
        );
    }
}

export default App;
