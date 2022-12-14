import React, {ChangeEvent, Component } from 'react';
import IJoke from "../types/joke.type";
import JokesService from "../services/jokes.service";

type Props = {};

type State = IJoke & {
    submitted: boolean
};

export default class AddJokeComponent extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.onChangeJoke = this.onChangeJoke.bind(this);
        this.saveJoke = this.saveJoke.bind(this);
        this.newJoke = this.newJoke.bind(this);
        this.state = {
            joke: "",
            submitted: false
        };
    }

    onChangeJoke(e: ChangeEvent<HTMLInputElement>) {
        console.log("Joke set to '" + e.target.value + "'");
        this.setState({
            joke: e.target.value
        });
    }

    saveJoke() {
        const data: IJoke = {
            joke: this.state.joke
        };

        JokesService.create(data)
            .then(r => {
                this.setState({
                    joke: r.data.joke,
                    submitted: true
                });
            })
            .catch((e: Error) => {
                console.log(e);
            });
    }

    newJoke() {
        this.setState({
            joke: "",
            submitted: false
        });
    }

    render() {
        const {joke, submitted} = this.state;
        return (
            <div className="submit-form">
                {submitted ? (
                    <div>
                        <h4>Joke was added.</h4>
                        <button className="btn btn-success" onClick={this.newJoke}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Joke</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={joke}
                                onChange={this.onChangeJoke}
                                name="title"
                            />
                        </div>
                        <button onClick={this.saveJoke} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}