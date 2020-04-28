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

## API endpoints

To use the api, make a post request to http://localhost:3000/complexity.

The body should have a key `"inputText"` and a string value with the content to be analyzed.

You can make a post request with a bigger text to http://localhost:3000/complexity?mode=verbose, the content will be broken by frases ended by '!' '.' or '?' and the lexical analysis done frase by frase.


The following post routes are available. 
- http://localhost:3000/complexity
- http://localhost:3000/complexity?mode=verbose