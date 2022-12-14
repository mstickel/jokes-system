import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RandomJokeComponent from "./components/RandomJokeComponent";
import AddJokeComponent from "./components/AddJokeComponent";

class App extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <Link to={"/"} className="navbar-brand">
                        Chuck Norris Jokes
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/add"} className="nav-link">
                                Add a Joke
                            </Link>
                        </li>
                    </div>
                </nav>
                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<RandomJokeComponent/>}/>
                        <Route path="/add" element={<AddJokeComponent/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

export default App;
