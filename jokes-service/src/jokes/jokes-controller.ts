import {Service} from "typedi";
import JokesRepository from "./jokes-repository";
import Joke from "./joke";

@Service()
export default class JokesController {

    constructor(private jokesRepository : JokesRepository) {
    }

    async random() : Promise<Joke> {
        return this.jokesRepository.list().then(jokes => {
            return jokes[Math.floor(Math.random() * jokes.length)];
        });
    }

    async create(joke: Joke) : Promise<Joke> {
        return this.jokesRepository.create(joke);
    }
}