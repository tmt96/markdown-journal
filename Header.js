/**
 * Created by MinhTuan on 3/28/2017.
 */
import React, { Component } from 'react';
import './App.css';

class Header extends Component {
    render() {
        // TODO: Syncing to Google Drive, auto-uploading & retrieving (default directory structure: MDiary/{year}/{month}/{day}
        // TODO: Retrieved from GDrive safely, even if user change title (or disable renaming, if possible)
        // TODO: Logos & images!
        return (
            <div  className="App-header">
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

export default Header;