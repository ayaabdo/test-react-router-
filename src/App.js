import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Login () {
    return(
    <div>
        <link to = "/Login">Login</link>
    </div>
    );
}
function Logout () {
    return(
      <div>
          <link to = "/Logout">Logout</link>
      </div>
    );
}

class App extends Component {
    render() {
        return (
            <h1>
                <link to="/">Home</link>
            </h1>
        );
    }
}
 function routes () {
     return(
      <BrowserRouter>
        <switch >
            <div>
                <Route exact path = "/" component = {App}/>
            <Route path = "/Login" component = {Login}/>
            <Route path = "/Logout" component = {Logout}/>
            </div>
        </switch>
      </BrowserRouter>
     );
}


export default  routes;