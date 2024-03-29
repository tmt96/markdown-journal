/**
 * Created by MinhTuan on 3/27/2017.
 */

import React, { Component } from 'react';
import DatePicker from "./DatePicker.js";
import './App.css';

class Sidebar extends Component {
    onNewPageClick() {
//        createNewPage();
    }

    render() {
        return (
            <div className="sidebar">
                <div>
                    <button
                        className="newjournal-button"
                        onClick={this.onNewPageClick}>
                        New Journal
                    </button>
                </div>
                <DatePicker className="date-picker"/>
            </div>
        )
    }
}

export default Sidebar;

