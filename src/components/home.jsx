import React, { Component } from 'react';
import firebase from '../config/config';
import Note from '../Note/note';
import NoteForm from '../NoteForm/noteForm';

class App extends Component {
    constructor(props) {
        super(props)
        this.database = firebase.database().ref().child('notes');
        this.state = {
            notes: [],
            currUserEmail: ''
        }
    }
    logOut = () => {
        firebase.auth().signOut();
    }
    addNote = (note) => {
        this.database.push().set({
            noteContent: note,
            userEmail: this.state.currUserEmail
        });
    }
    removeNote = (noteId) => {
        this.database.child(noteId).remove();
    }

    componentWillMount() {
        const previousNotes = this.state.notes;
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,
                userEmail: snap.val().userEmail
            })
            this.setState({
                notes: previousNotes
            })
        })
        this.database.on('child_removed', snap => {
            for (let i = 0; i < previousNotes.length; i++) {
                if (previousNotes[i].id === snap.key) {
                    previousNotes.splice(i, 1)
                }
            }
            this.setState({
                notes: previousNotes
            })
        })
    }
    componentDidMount() {
        console.log(firebase.auth())
        let user = firebase.auth().currentUser;
        if (user) {
            this.setState({
                currUserEmail: user.email
            })
        }
    }
    render() {

        return (
            <div className="notes_and_form">
                <div className="current_user">
                    <span>{this.state.currUserEmail}</span>
                    <button onClick={this.logOut}>LogOut</button>
                </div>

                <div className="notes_box">
                    {
                        this.state.notes.map((note, key) => {
                            return (
                                < Note
                                    noteContent={note.noteContent}
                                    noteId={note.id}
                                    key={note.id}
                                    userEmail={note.userEmail}
                                    removeNote={this.removeNote}
                                />
                            )
                        })
                    }
                </div>
                <div className="noteForm">
                    < NoteForm addNote={this.addNote} />
                </div>
            </div>
        );
    }
}

export default App;
