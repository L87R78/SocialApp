import React, { Component } from 'react';
import fire from './config/file';
import LoginRegister from './components/loginRegister';
import Home from './components/home';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null
    }
  }
  componentDidMount() {
    this.authListener();
  }
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({
            user
          })
        }else {
          this.setState({
            user: null 
          })
        }
    })

  }
 

  render() {
    return (
      <div className="App">
        {
          this.state.user
          ? < Home />
          : < LoginRegister />
        }
      </div>
    );
  }
}

export default App;
