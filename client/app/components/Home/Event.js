import React, { Component } from 'react';
import 'whatwg-fetch';

import {
  setInStorage,
  getFromStorage,
} from '../../utils/storage';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      EventCreated: true,
      token: '',
      EventName: '',
      EventAddress: '',
      EventDate: '',
      EventTime: '',
      EventDescription: ''
    };

    this.onTextboxChangeEventName = this.onTextboxChangeEventName.bind(this);
    this.onTextboxChangeEventAddress = this.onTextboxChangeEventAddress.bind(this);
    this.onTextboxChangeEventDate = this.onTextboxChangeEventDate.bind(this);
    this.onTextboxChangeEventTime = this.onTextboxChangeEventTime.bind(this);
    this.onTextboxChangeEventDescription = this.onTextboxChangeEventDescription.bind(this);


    this.onEvent = this.onEvent.bind(this);

  }

  //events
  onTextboxChangeEventName(event) {
    this.setState({
      EventName: event.target.value,
    });
  }

  onTextboxChangeEventAddress(event) {
    this.setState({
      EventAddress: event.target.value,
    });
  }

  onTextboxChangeEventDate(event) {
    this.setState({
      EventDate: event.target.value,
    });
  }

  onTextboxChangeEventTime(event) {
    this.setState({
      EventTime: event.target.value,
    });
  }
  onTextboxChangeEventDescription(event) {
    this.setState({
      EventDescription: event.target.value,
    });
  }

  onEvent() {
    // Grab state
    const {
      EventCreated,
      EventName,
      EventAddress,
      EventDate,
      EventTime,
      EventDescription
    } = this.state;
    // this.setState({
    //   EventCreated: true,
    // });
    // Post request to backend
    fetch('/api/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: EventName,
        address: EventAddress,
        date: EventDate,
        time: EventTime,
        description: EventDescription
      }),
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('flock', { token: json.token });
          this.setState({
            EventCreated: json.message,
            EventName: '',
            EventAddress: '',
            EventDate: '',
            EventTime: '',
            EventDescription: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            EventCreated: false,
          });
        }
      });
  }


  render() {
    const {
      EventCreated,
      token,
      EventName,
      EventAddress,
      EventDate,
      EventTime,
      EventDescription
    } = this.state;

    if (!token) {
      return (
        <div className="container center-align">
          <div className="row left-align">
            <h4>New Event</h4>
            <input
              type="text"
              placeholder="Name of event"
              value={EventName}
              onChange={this.onTextboxChangeEventName}
            />
            <br />
            <input
              type="text"
              placeholder="Address of event"
              value={EventAddress}
              onChange={this.onTextboxChangeEventAddress}
            />
            <br />
            <input
              type="date"
              placeholder="Date of event"
              value={EventDate}
              onChange={this.onTextboxChangeEventDate}
            />
            <br />
            <input
              type="time"
              placeholder="Time of event"
              value={EventTime}
              onChange={this.onTextboxChangeEventTime}
            />
            <br />
            <input
              type="text"
              placeholder="Description of event"
              value={EventDescription}
              onChange={this.onTextboxChangeEventDescription}
            />
            <br />
            <button className="btn waves-effect waves-light btn-primary" onClick={this.onEvent}>Create Event</button>
          </div>
        </div>
      )
    }

  }
}


export default Event;