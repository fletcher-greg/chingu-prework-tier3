import React, { Component } from 'react';
import * as firebase from 'firebase';

class WriteNotes extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Note Title',
      subject: "What's on your mind?"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newJournal = firebase
      .database()
      .ref('users/' + firebase.auth().currentUser.uid + '/journals/notes/')
      .push();
    let uniqueKey = newJournal.key;

    newJournal.set({
      key: uniqueKey,
      title: this.state.title,
      subject: this.state.subject
    });
  }

  handleChange(event) {
    // this.setState({ event.target.name: event.target.value });
    if (event.target.name === 'title') {
      this.setState({ title: event.target.value });
    } else if (event.target.name === 'subject') {
      this.setState({
        subject: event.target.value
      });
    }
  }
  render() {
    return (
      <form className="notes-input-container" onSubmit={this.handleSubmit}>
        <p>Start making notes...</p>
        <div className="notes-input">
          <input
            className="text-input"
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
        </div>

        <div className="notes-input">
          <input
            className="text-input"
            type="text"
            name="subject"
            required
            onChange={this.handleChange}
            value={this.state.subject}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default WriteNotes;
