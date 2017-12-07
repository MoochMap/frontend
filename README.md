# frontend
https://moochmap.github.io/frontend/#/

Mooch Map is a website designed to help Purdue Students eat as affordably as possible. How do we accomplish that? Its simple. Whenever a student hears about an event/callout that is offering free food they can post it on Mooch Map to spread the information. Mooch Map helps to provide exposure for clubs/events while also feeding poor College Students, its a win-win.

### Required
  * NodeJS v9.0.0
  * npm v5.5.1
  * mongodb
  
  
## Frontend Setup (https://github.com/MoochMap/frontend)
 
 In order to use localhost for backend 
 ```
 - open src/api.js
 - replace var API_URL = 'https://moochmap.herokuapp.com' with var API_URL = 'http://localhost:5000'
```

 Install yarn
 ```
 npm install yarn
 ```
 Run server with yarn
 ```
 yarn install
 yarn run start
 ```
  

## Backend Setup (https://github.com/MoochMap/backend)

startup mongodb
```
mongod
```
then
```
npm update
npm install

export database='mongodb://localhost:27017/exampleDb'
export secret='mySecret'

node app.js
```
