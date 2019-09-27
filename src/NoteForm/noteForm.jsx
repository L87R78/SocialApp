import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            noteNewContent: ''
        }
    }
    handleUserInput = (e) => {
        this.setState({
            noteNewContent: e.target.value
        })
    }
    writeNote = (e) => {
        if (this.state.noteNewContent.length > 0) {
            this.props.addNote(this.state.noteNewContent);
            this.setState({
                noteNewContent: ''
            })
        }

    }

    render() {
        return (
            <div className="noteForm">
                <input
                    type="text"
                    placeholder="Please write text here..."
                    value={this.state.noteNewContent}
                    onChange={this.handleUserInput}
                />
                <button className="btnAdd" onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default Note;
