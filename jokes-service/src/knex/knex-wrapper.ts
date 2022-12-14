import {config} from "../knexfile";
import knex, {Knex} from "knex";
import {Service} from "typedi";

@Service()
export default class KnexWrapper {

    knex: Knex;

    constructor() {
        this.knex = knex(config["development"]);
    }
}