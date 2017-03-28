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
            <div>
                <div>
                    <button
                        className="newjournal-button"
                        onClick={this.onNewPageClick}>
                        New Journal
                    </button>
                </div>
                <div className="date-picker">
                    <DatePicker/>
                </div>
            </div>
        )
    }
}

export default Sidebar;

