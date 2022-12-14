# Jokes System

This project was written as a proof-of-concept, putting together the following technologies:
* Backend
  * Node.js
  * Typescript
  * Express
  * Knex
  * TypeDI
  * Cors
  * Actuator
* Frontend
  * React
  * Typescript
  * Axios
  * Bootstrap
* Database
  * Postgresql
* Orchestration
  * Docker images for each service
  * Helm charts for each service
  * Parent Helm chart that runs the whole thing
* Data
  * Chuck Norris Jokes!
  
_When Chuck Norris throws exceptions, it’s across the room._

### Prep It

Prerequesites:
* Node, `npm`, `npx`, etc
* Docker Desktop or equivalent (to build and tag the Docker images)
* A place to deploy to Kubernetes.  Docker Desktop, Minikube, K3s, etc.
  * `kubectl`
* Helm
* A basic understanding of Typescript and Javascript is useful here if you're looking at the code.

### Get It

To check out the code from Git, run:
```
git clone https://github.com/mstickel/jokes-system.git
```

_All arrays Chuck Norris declares are of infinite size, because Chuck Norris knows no bounds._

### Build It

**Backend** (`jokes-service`):

To build the `jokes-service` Docker image:

```
docker build . -t ssdev/jokes-service:1.0.0-SNAPSHOT
```

**Frontend** (`jokes-ui`):

To build the `jokes-ui` Docker image:

```
docker build . -t ssdev/jokes-ui:1.0.0-SNAPSHOT
```

### Run It

From the `helm-parent` directory, run

```aidl
helm dep up
helm install js . -f values-dev.yaml
```

### Run Knex Migrations

To run Knex migrations, start up the stack using Helm and then set up a port forward on the Kubernetes Postgresql instance.  Then, run the following from the `jokes-service` root directory (assume the pf is on port 32432):

`npx knex --client pg --knexfile ./src/knexfile.ts --connection postgresql://jokes:password@localhost:32432/jokes migrate:latest`

### Run Knex Seed

To run the seeds:

`npx knex --client pg --knexfile ./src/knexfile.ts --connection postgresql://jokes:password@localhost:32432/jokes seed:run`

### Hit It

Open a browser and navigate to `http://localhost:4000`

_Chuck Norris’s keyboard doesn’t have a Ctrl key because nothing controls Chuck Norris._