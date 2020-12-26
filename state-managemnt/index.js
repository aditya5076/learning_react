import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';

// so in func based component main issue is our jsx ran first than that of function of geoLoc
// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => console.log(error)
//   );
//   return <h1>hi there</h1>;
// }

// **************************CLASS************************
// class based approach
// lifecycle mthod
class App extends React.Component {
  //this construcotr will run first as soon as this compnent starts rendering
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errMsg: '',
    };
  }
  componentDidMount() {
    //is used for data for loading
    // console.log('after compnent first get rendered on the screen will load the data');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errMsg: err.message })
    );
  }
  componentDidUpdate() {
    console.log(
      'after component gets re-rendered my updated the state will update the data'
    );
  }
  render() {
    if (this.state.errMsg && !this.state.lat) {
      return <h1>err:{this.state.errMsg}</h1>;
    }
    if (!this.state.errMsg && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />; //passing the state to nxt comp
    }
    return <Loader message='hey respond to load..' />;
  }
}

// ReactDOM.render(<App />, document.querySelector('#root'));
