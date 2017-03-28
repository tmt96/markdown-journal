// (c) 2017 Tuan Tran
// Simple web-based journal app based on Markdown. Syncing with Google Drive

// TODO: Rewrite app to conform to react convention: each class in its own file, states should be in parent component.
// TODO: cut down on unneccessary react component dependencies
import React, { Component } from 'react';
import Pad from "./Pad.js";
import Sidebar from "./Sidebar.js";

import './App.css';

// TODO: Switch to old journal when change date
// function onDateChange(date) {
//     document.getElementById("page-title").innerHTML = date.toDateString();
// }

class MainJournal extends Component {

    render() {
        // TODO: New journal button, which when clicked should create a new page with default headings for user
        // TODO: Fix unequal top margin
        return (
            <div className="">

                <div className="sidebar">
                    <Sidebar/>
                </div>

                <div className="pad" id="editor">
                    <Pad/>
                </div>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        // TODO: Syncing to Google Drive, auto-uploading & retrieving (default directory structure: MDiary/{year}/{month}/{day}
        // TODO: Retrieved from GDrive safely, even if user change title (or disable renaming, if possible)
        // TODO: Logos & images!
            return (
            <div>
                <div className="Logo">
                    <h2>MDiary</h2>
                </div>
                <div className="Date">
                    <h2 id="page-title"> {new Date().toDateString()} </h2>
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
