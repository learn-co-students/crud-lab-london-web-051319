import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: ''
  }

  handleChange = event => this.setState({text: event.target.value})

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview({restaurantId: this.props.restaurantId, text: this.state.text})
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
         <form onSubmit={this.handleSubmit}>
          <label>Add Review</label>
          <input type='text' value={this.state.text} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
