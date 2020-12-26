import React, { Component } from 'react';

export default class SearchBar extends Component {
  //   onInputChange(e) {
  //     console.log(e.target.value);
  //   }

  //1) *********************to solve 'state' undefined *****************8
  //   constructor(props) {
  //     super(props);
  //     this.onSubmitInput = this.onSubmitInput.bind(this);
  //   }

  state = {
    term: '',
  };
  //2)
  onSubmitInput = (e) => {
    e.preventDefault();
    // console.log(this.state.term); //from SearchBar.js:20

    this.props.onSubmitCommingFromApp(this.state.term); //passing the props from child to parent
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmitInput} className='ui form'>
          <div className='field'>
            <label onClick={() => console.log('i got clicked')}>
              Image Search
            </label>
            <input
              type='text'
              value={this.state.term}
              onChange={(e) => {
                this.setState({
                  term: e.target.value,
                });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}
