import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor( props ) {
    super( props );
  }
  render() {
    return (
      <div className="App">
        <div style={{ marginTop: 35 }}>
          <img src="a-logo.jpg" alt="" width={ 200 } height={ 200 } />
        </div>
      </div>
    );
  }
}

export default App;
