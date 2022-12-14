import {Service} from "typedi";
import Joke from "./joke";
import KnexWrapper from "../knex/knex-wrapper";
import {Knex} from "knex";

@Service()
export default class JokesRepository {

    knex: Knex;

    constructor(private knexWrapper: KnexWrapper) {
        this.knex = knexWrapper.knex;
    }

    async list(): Promise<Joke[]> {
        return this.knex('jokes').select({
            joke: 'joke'
        })
            .then((jokes) => {
                return jokes;
            })
            .catch((err) => {
                console.error(err);
                return [];
            })
    }

    async create(joke: Joke): Promise<Joke> {
        return this.knex('jokes').insert(joke).then(num => {
            return joke;
        })
    }
}