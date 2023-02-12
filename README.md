# coding-challenge


# Summary
This is the coding challenge presented the [coding-challenge](https://github.com/morkro/coding-challenge) repo by [morkro](https://github.com/morkro)

# Architecture and technical choices

There are two packages in this application
- Server: The backend server was implemented with nodejs and the express framework whereas MongoDB was used to store the reports.
- Frontend: The frontend was implemented using React


# Code structure

```
fixtures/      
packages/
├─ server/
│  ├─ src/
│  │  ├─ controler/
│  │  ├─ model/
│  │  ├─ services/
│  │  ├─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ api/
│  │  ├─ App.js
│  │  ├─ index.js
│  ├─ public/
```


# How to run
## Prerequisites 
 - Please install yarn 3.X
 - Please install and run your mongoDB instance
 
Your mongodb instance should run in `localhost:27017`

## Running the modules

 Run ```yarn install``` to install the dependencies 

 Run ```yarn populate-database``` to populate the database with the given data provided in the repository

 Run ```yarn start-server``` to start the express server

Run  ```yarn start-frontend``` to start the react frontend app

The backend server will be listening to `localhost:8080`
 
The frontend server will be listening to `localhost:3000`

# Whats missing

### Tests...tests...tests
No tests are written as I opted for a complete fullstack runnable application trading off tests given the current time limit.
### Better error handling
There is minimal error handling in both modules.
### Configurability
This fullstack app only runs locally on localhost with ports 8080 for the server, 3000 for the frontend and 27017 for the DB





