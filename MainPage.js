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

export default MainJournal;