import React, { Component } from 'react';
import fire from '../config/config';

class LoginAndRegister extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    login = (e) => {
        e.preventDefault();
        fire
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
                this.setState({
                    fireErrors: err.message
                })
            })

    }
    register = (e) => {
        e.preventDefault();
        fire
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
                this.setState({
                    fireErrors: err.message
                })
            })
    }

    render() {
        let errorNotifications = this.state.fireErrors
            ? (<div className="error">{this.state.fireErrors}</div>)
            : null
        console.log(errorNotifications)
        return (
            <div className="form_block">
                <div id="title">
                    {this.state.formTitle}
                </div>
                <div className="body">
                    {errorNotifications}
                    <form>
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                        />
                        <button type="submit" className="loginBtn" onClick={this.login} >Enter</button>

                    </form>
                    <button type="submit" className="registerBtn" onClick={this.register} >Register</button>
                </div>
            </div>
        );
    }
}
export default LoginAndRegister;
