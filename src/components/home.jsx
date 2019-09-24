import React, { Component } from 'react';
import fire from '../config/config';
import Note from '../Note/note';
import NoteForm from '../NoteForm/noteForm';
//import firebase from 'firebase/app';
//import 'firebase/database';

class App extends Component {
    constructor(props) {
        super(props)
        //this.app = firebase.initializeApp(DB_CONFIG);
        this.database = fire.database().ref().child('notes');
        this.state = {
            notes: [],
        }
    }
    logOut = () => {
        fire.auth().signOut();
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
    render() {
        // let errorNotifications = this.state.fireErrors
        //     ? (<div className="error">{this.state.fireErrors}</div>)
        //     : null

        //console.log(this.state.notes)
        return (
            <div className="App">
                <h2>Home page</h2>
                <button onClick={this.logOut}>logOut</button>
                <h2>react and firebase</h2>
                <div className="notesBody">
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
                <div className="noteForm">
                    < NoteForm addNote={this.addNote} />
                </div>
            </div>
        );
    }
}

export default App;
