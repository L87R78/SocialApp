import React, { Component } from 'react';
import fire from './config/config';
import LoginRegister from './components/loginAndRegister';
import Home from './components/home.jsx';
import './App.scss';

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
