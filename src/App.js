import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Home() {
    return (
        <div className= "b">
            <h1>Hi Geek! </h1>
            <p>Welcome to our review website, Feel free to join us with ur linkedin account.</p>
            <div className = "container">
                    <button class="btn" >
                        <link to ='https://www.linkedin.com'></link>
                   </button>
            </div>
        </div>
    );
}
class App extends Component {
    render() {
        return (
        <Router>
                    <Switch>
                        <Route exact path = '/' component={Home}/>

                    </Switch>
        </Router>
        );
    }
}
export default App;
