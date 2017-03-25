import React, { Component } from 'react';
// import SimpleMDE from 'simplemde';
import DatePicker from 'react-pikaday-component';
var SimpleMDE = require('react-simplemde-editor');

require('pikaday/css/pikaday.css');
require('simplemde/dist/simplemde.min.css');
import './App.css';

class Pad extends Component {
    render(){
        return (
            <div>
                <SimpleMDE style="display:none"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}


class JournalDate extends Component {
    constructor() {
        super();
        this.state = {};
    }

    onDateChange(date) {
        this.setState({ date });
    }

    render() {
        const { date } = this.state;

        return (
            <div>
                <DatePicker
                    placeholder="DD/MM/YYYY"
                    format="DD/MM/YYYY"
                    value={new Date(date)}
                    onChange={this.onDateChange}
                />
            </div>
        );
    }
}

class MainJournal extends Component {

    render() {
        return (
            <div className="">
                <div className="date-picker">
                    <JournalDate/>
                </div>

                <div className="pad">
                    <Pad></Pad>
                </div>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <div className="Logo">
                    <h2>MDiary</h2>
                </div>
                <div className="Date">
                    <h2> {new Date().toJSON().slice(0,10).replace(/-/g,'/')} </h2>
                </div>
                <div className="Account">
                    <h2 className="avatar">Ngoc Van</h2>
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <div  className="App-header">
                    <Header/>
                </div>

                <div className="journal-main">
                    <MainJournal/>
                </div>
            </div>
        );
    }
}

export default App;
