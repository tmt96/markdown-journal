/**
 * Created by MinhTuan on 3/28/2017.
 */
import React, { Component } from 'react';
import Pad from "./Pad.js";
import Sidebar from "./Sidebar.js";

import './App.css';

class MainJournal extends Component {

    render() {
        // TODO: New journal button, which when clicked should create a new page with default headings for user
        // TODO: Fix unequal top margin
        return (
            <div className="journal-main">
                <Sidebar/>

                <Pad className="mainpad" id="editor"/>
            </div>
        );
    }
}

export default MainJournal;