/**
 * Created by MinhTuan on 3/27/2017.
 */
import React, { Component } from 'react';
import SimpleMDE from "react-simplemde-editor";
import 'react-simplemde-editor/dist/simplemde.min.css';

// A simple markdown editor for journal.
class Pad extends Component {
    constructor() {
        super();
        this.state = {
            textContent: "Welcome to MDiary"
        }
    }

    updateText(text) {
        this.setState({
            textContent: text
        });
    }

    // TODO: add more toolbar buttons. Change options.
    render(){
        return (
            <div>
                <SimpleMDE
                    value={this.state.textContent}
                    style="display:none"
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default Pad;
