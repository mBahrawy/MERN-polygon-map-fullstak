# polygon-map-fullstak app
This a project is build by ReactJS powered by DeckGL and MapBox map API.
Built Typscript, Vite JS for the forntend, and Nodejs, Express, Typscript for the backend.

## For setting up the project: 
- Clone the project 
- CD to the project directory 
- Install the frontend type this command: `frontend:install` 
- Install the backend type this command: `api:install` 

## For starting the project in development:
- Run the frontend by this command: `frontend:start` (Development version on default port is 3000) 
- Run the backend by this command: `api:start` (Development version on default port is 9000)


## For building the project:
- Run the frontend by this command: `frontend:build` (Static app folder will be in frontend/dist)
- Run the backend by this command: `api:start` (compiled node app folder will be in backend/build)

## Frontend routing:
- `/login` for login, public no authentication.
- `/users` for showing user table screen, need authentication.
- `/map` for showing map screen, need authentication.


## Backend API:
- GET : `/polygon` for getting polygons list, public no authentication.
- GET : `/polygon/:id` for getting single polgon data, public no authentication.

## Login data for testing:

```
 email: 'john@xyz.com', password: '123abc'
 email: 'mike@xyz.com', password: '123abc'
```
