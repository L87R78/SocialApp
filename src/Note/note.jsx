import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props)
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }
    handleRemoveNote = (id) => {
        this.props.removeNote(id)
    }

    render() {
        return (
            <div className="note fade_in">
                {/* <div className="btn_remove">
                    <button onClick={() => this.handleRemoveNote(this.noteId)}>X</button>
                </div> */}
                <p>{this.noteContent}</p>
            </div>
        )
    }
}
Note.propTypes = {
    noteContent: PropTypes.string
};
export default Note;
