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
            userEmail: ''
        }
    }
    logOut = () => {
        firebase.auth().signOut();
    }
    addNote = (note) => {
        this.database.push().set({ noteContent: note });
    }
    removeNote = (noteId) => {
        this.database.child(noteId).remove();
    }

    componentWillMount() {
        const previousNotes = this.state.notes;
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent
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
        let user = firebase.auth().currentUser;
        if (user) {
            this.setState({
                userEmail: user.email
            })
        }
    }
    render() {
        return (
            <div className="boxes_home">
                <div className="box_me">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpErtT1Ehnevyx6fpihxPb8kB-2N7jf0-jsGQfSrqHE6R02ZHM-Q" alt="" />
                    <span className="my_email">{this.state.userEmail}</span>
                    <button onClick={this.logOut}>logOut</button>
                </div>

                <div className="notesBody">
                    <div className="noteForm">
                        < NoteForm addNote={this.addNote} />
                    </div>
                    <div className="notex_box">
                        {
                            this.state.notes.map((note, key) => {
                                return (
                                    < Note
                                        noteContent={note.noteContent}
                                        noteId={note.id}
                                        key={note.id}
                                        removeNote={this.removeNote}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="other_user">
                    <h2>other</h2>
                </div>
            </div>
        );
    }
}

export default App;
