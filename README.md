### Packages

Here are some of the few packages that were installed.

#### express

`npm i -S express`
`npm i -D @types/express`

#### typescript

`npm i -D typescript`

#### db-migrate

`npm install -g db-migrate`

#### cors

`npm install --save cors`

#### bcrypt

`npm -i bcrypt`
`npm -i -D @types/bcrypt`

#### morgan

`npm install --save morgan`
`npm -i -D @types/morgan`

#### jsonwebtoken

`npm install jsonwebtoken --sav`
`npm -i -D @types/jsonwebtoken`

#### cross-env

`npm install --save-dev cross-env`

#### jasmine

`npm install jasmine @types/jasmine @ert78gb/jasmine-ts ts-node --save-dev`

#### supertest

`npm i supertest`
`npm i --save-dev @types/supertest`

## Set up Database

### Create Databases

We shall create the dev and test database.

- connect to the default postgres database as the server's root user `psql -U postgres`
- In psql run the following to create the dev and test database
  - `CREATE DATABASE store_dev;`
  - `CREATE DATABASE store_test;`
- Connect to the databases and grant all privileges
  - Grant for dev database
    - `\c store_dev`
  - Grant for test database
    - `\c store_test`

### Migrate Database

Navigate to the root directory and run the command below to migrate the database

`db-migrate up`
`db-migrate down`

## Start App

`npm run dev`

### Running Ports

After start up, the server will start on port `3000` and the database on port `5432`

## Build the App

`npm run start`

## Testing

Run test with

`npm run test`

It sets the environment to `test`, migrates up tables for the test database, run the test then migrate down all the tables for the test database.
