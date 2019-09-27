import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props)

    }
    handleRemoveNote = (id) => {
        this.props.removeNote(id)
    }
    render() {
        let { userEmail, noteContent, noteId } = this.props;

        return (
            <div className="note fade_in">
               
                    <i class="far fa-smile-wink"></i>
                
                <div className="email_and_text">
                    <span>{userEmail}</span>
                    {/* <div className="btn_remove">
                    <button onClick={() => this.handleRemoveNote(noteId)}>X</button>
                </div> */}
                    <p>{noteContent}</p>
                </div>
            </div>
        )
    }
}
Note.propTypes = {
    noteContent: PropTypes.string
};
export default Note;
