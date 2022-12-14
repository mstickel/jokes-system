import React, { Component } from 'react';
import JokesService from "../services/jokes.service";
import IJoke from "../types/joke.type";

type Props = {};
type State = {
    currentJoke: IJoke | null
};

export default class RandomJokeComponent
    extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    componentDidMount() {
        this.retrieveRandomQuote();
    }

    retrieveRandomQuote() {
        JokesService.random().then(r => {
           this.setState({
               currentJoke: r.data
           });
        });
    }

    render() {
        const { currentJoke } = this.state;
        return (
            <div>
                {currentJoke ? (<div>{currentJoke.joke}</div>) : (<div>Loading...</div>)}
                <div><button className="btn btn-primary" onClick={() => this.retrieveRandomQuote()}>Get Another Quote</button></div>
            </div>

        );
    }
}
