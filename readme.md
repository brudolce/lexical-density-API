# Lexical Density API

## Run the API

it is required to run this application
- nodeJs
- mongoDB

Clone this reposritory on a empty folder
`$ git clone https://github.com/brudolce/lexical-density-API.git`

Reminder: Before running the application, please install the depedencies and run the seed file.

On the root folder
- `$ npm install` install dependencies  
- `$ npm run seed` initializes db with the provided non-lexical words
- `$ npm run start` initialize the API on http://localhost:3000/
- `$ npm run dev` initialize the API on dev
- `$ npm run test` run tests

## API routes

To use the api, make a post request with a bodykey "inputString" and a string value with the content to be analyzed.

The following post routes are available. The second one is to have a lexical analysis of a bigger text, broken down by frases ended by '!' '.' or '?'
- http://localhost:3000/complexity
- http://localhost:3000/complexity?mode=verbose