### Run Knex Migrations

To run Knex migrations, first set up a port forward on the Kubernetes Postgresql instance.  Then, run the following from the `jokes-service` root directory (assume the pf is on port 32432):

`npx knex --client pg --knexfile ./src/knexfile.ts --connection postgresql://jokes:password@localhost:32432/jokes migrate:latest`

### Run Knex Seed

To run the seeds:

`npx knex --client pg --knexfile ./src/knexfile.ts --connection postgresql://jokes:password@localhost:32432/jokes seed:run`