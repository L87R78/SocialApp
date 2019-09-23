import React, { Component } from 'react';
import fire from '../config/file';

class Home extends Component {

    logOut = () => {
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
                <h2>Home page</h2>
                <button onClick={this.logOut}>logOut</button>
            </div >
        )
    }

}
export default Home;
