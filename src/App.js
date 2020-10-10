import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            step: 1,
        };
    }

    increment = () =>  {
        const {value, step} = this.state;
        this.setState( {
            value: value + step,
        });
    };

    decrement = () => {
        const {value, step} = this.state;
        if(value > 0) {
            this.setState( {
                value: value - step,
            });
        }
    };

    render() {
        const {value} = this.state;
        return (
            <div>
                <h1>Some text</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <p>{value}</p>
            </div>
        );
    }
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
}

export default App;
