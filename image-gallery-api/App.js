import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ImageResults from './components/ImageResults';

class App extends React.Component {
  //   invoking callback from children
  
  state = {
    images: [],
    
  };

  onSearchBarSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID EJ1Nix7DzgrMG9yiqgp1i2Q95f72OGnnYMGLK4Xv6bQ',
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchBar onSubmitCommingFromApp={this.onSearchBarSubmit} />
        <ImageResults images={this.state.images} />
      </div>
    );
    
  }
}

export default App;
