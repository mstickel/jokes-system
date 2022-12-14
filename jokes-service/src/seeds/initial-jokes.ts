import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("jokes").del();

    // Inserts seed entries
    await knex("jokes").insert([
        { joke: "Chuck Norris was once bitten by a poisonous snake. And after a week of excruciating pain, the snake died." },
        { joke: "Chuck Norris once played Russian Roulette with a fully loaded gun and won." },
        { joke: "Chuck Norris can dribble a bowling ball." }
    ]);
};
