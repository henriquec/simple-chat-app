import React, { Component } from 'react';
import LoginForm from './components/login-form';
import './App.css';

class App extends Component {
    componentWillMount(){
        fetch(`/api/chatrooms`).then((response) => {
            response.json().then((r) => {console.log(r)});
        });
    }
    render() {
        return (
          <div className="App">
            <LoginForm />
          </div>
        );
    }
}

export default App;
