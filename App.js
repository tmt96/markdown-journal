// (c) 2017 Tuan Tran
// Simple web-based journal app based on Markdown. Syncing with Google Drive

// TODO: Rewrite app to conform to react convention: each class in its own file, states should be in parent component.
// TODO: cut down on unneccessary react component dependencies
import React, { Component } from 'react';
import MainJournal from './MainPage.js';
import Header from './Header.js';
import './App.css';

// TODO: Switch to old journal when change date
// function onDateChange(date) {
//     document.getElementById("page-title").innerHTML = date.toDateString();
// }

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
