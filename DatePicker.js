/**
 * Created by MinhTuan on 3/27/2017.
 */
import Pikaday from "react-pikaday-component";
import React, { Component } from 'react';
import 'pikaday/css/pikaday.css';

class DatePicker extends Component {
    // TODO: consistent date formatting
    constructor() {
        super();
        this.state = {};
    }

    onDateChange(date) {
        //onDateChange(date);
        this.setState({ date });
    }

    render() {
        const { date } = this.state;
        return (
            <div>
                <Pikaday
                    placeholder="choose a date"
                    value={new Date(date)}
                    onChange={this.onDateChange}
                />
            </div>
        );
    }
}

export default DatePicker;
