import React, { Component } from 'react';
import firebase from '../config/config';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const styles = {
    input: {
        margin: '0.5rem',
    }
};

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

        firebase
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
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((err) => {
                this.setState({
                    fireErrors: err.message
                })
            })
    }
    getAction = (e) => {
        if (e === 'reg') {
            this.setState({
                formTitle: "Register New User",
                loginBtn: false,
                fireErrors: ''
            })
        } else {
            this.setState({
                formTitle: "Login",
                loginBtn: true,
                fireErrors: ''
            })
        }
    }

    render() {
        let errorNotifications = this.state.fireErrors
            ? (<div className="error">{this.state.fireErrors}</div>)
            : null

        let submitBtn = this.state.loginBtn
            ? (<button type="submit" className="loginBtn" onClick={this.login} >Enter </button>)
            : (<button type="submit" className="loginBtn" onClick={this.register} >Register</button>)

        let login_register = this.state.loginBtn
            ? (<button className="registerBtn" onClick={() => this.getAction('reg')}>Register</button>)
            : (<button className="registerBtn" onClick={() => this.getAction('login')}>Login</button>)

        const { classes } = this.props;
        return (
            <div className="form_block">
                <div id="title">
                    {this.state.formTitle}
                </div>
                <div className="body">
                    {errorNotifications}

                    <form >
                        <TextField
                            className={classes.input}
                            type="text"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                            label="Email"
                        />
                        <TextField type="password"
                            className={classes.input}
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            label="Password"
                        />
                    </form>
                    <div className="buttons">
                        {submitBtn}
                        {login_register}
                    </div>
                </div>
            </div>
        );
    }
}
LoginAndRegister.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(LoginAndRegister);
