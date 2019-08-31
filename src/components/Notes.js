import React, { Component } from 'react';
import * as firebase from 'firebase';

class Notes extends Component {
  constructor() {
    super();
    this.state = {
      journals: [
        { title: 'Make your own title', subject: 'Type subject here', key: 1 }
      ]
    };
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    let fbData = firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/journals/notes/' + e);
    fbData.remove();
  }

  componentDidMount() {
    // let user = firebase.auth().currentUser;
    // const rootref
    // let uid = user.uid;
    // const test =
    // firebase
    //   .database()
    //   .ref('users/' + firebase.auth().currentUser.uid + '/journals')
    //   .set({
    //     notes: ['happy dog', 'unicorn']
    //   });
    //   this.setState({
    //       journals:
    //   })
    let fbData = firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/journals/notes');

    fbData.on('value', snap => {
      let notes = snap.val();
      let newNotes = [];
      for (let note in notes) {
        newNotes.push({
          title: notes[note].title,
          subject: notes[note].subject,
          key: notes[note].key
        });
      }
      if (snap.val()) {
        this.setState({
          journals: newNotes
        });
      } else {
        this.setState({
          journals: [
            {
              title: 'Oops',
              subject:
                "You don't have any notes! Use the input above and typing now :)",
              key: 1
            }
          ]
        });
      }
    });
  }

  render() {
    return (
      <div className="notes-container">
        {this.state.journals.map(d => (
          <div key={d.key} className="note">
            <div className="notes-text">
              <div className="note-title">
                <h2 className="note-title-text">{d.title}</h2>
              </div>
              <p className="note-subject">{d.subject}</p>
            </div>
            <div className="delete-container">
              <button
                onClick={() => this.deleteNote(d.key)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Notes;
