import 'reflect-metadata';
import express from "express";
import actuator from "express-actuator";
import {Container} from "typedi";
import JokesController from "./jokes/jokes-controller";
import Joke from "./jokes/joke";
import cors from 'cors';

const main = async () => {
    const app = express();
    app.use(actuator());
    app.use(cors({
        origin: ['http://localhost:4000']
    }));
    app.use(express.json());

    const jokesController = Container.get(JokesController);
    app.get("/", ( req, res ) => {
        jokesController.random().then(joke => {
            return res.json(joke);
        });
    });
    app.post("/", ( req, res ) => {
        jokesController.create(req.body as Joke).then(joke => {
            return res.json(joke);
        })
    });

    app.listen(80, () => {
        console.log('Server started');
    });
}

main().catch(err => {
    console.error(err);
});