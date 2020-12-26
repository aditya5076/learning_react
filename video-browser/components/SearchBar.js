import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: "",
  };
  onInputHandler = (e) => {
    this.setState({ term: e.target.value });
  };
  onFormChange = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormChange} className="ui form">
          <div className="field">
            <label htmlFor="">Video search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}
