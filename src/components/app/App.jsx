import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';
import { createPost } from '../postFunctions/CreatePost';

export default class App extends Component {
  state = {
    text: '',
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    await createPost({
      text: this.state.text,
    });
    console.log(event.target.value);
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
    console.log(event.target.value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label className="input1">
            <input
              placeholder="text"
              onChange={this.handleChange}
              type="text"
            />
          </label>
          <button>Submit</button>
        </form>
      </>
    );
  }
}
