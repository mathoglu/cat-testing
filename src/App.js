import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import './App.css';
import CatButton from './components/cat-button.jsx';
import Canvas from './components/canvas.jsx';

class App extends Component {
  render() {
    const loading = this.props.status === 'LOADING';
    return (
      <div className="App">
        <div className="App-intro" style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}>
            {
              !loading ?
                  <div style={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative'  }}>
                      <CatButton />
                      <Canvas />
                  </div>
                  :
                  <div style={{ width: '80%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Loader
                         type="Hearts"
                         color="#FF0000"
                         height="80"
                         width="80"
                      />
                  </div>
            }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        status: state.cats.status
    };
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
