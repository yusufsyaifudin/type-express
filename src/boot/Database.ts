import * as bookshelf from "bookshelf";

let knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'news'
  }
});

export let Bookshelf: bookshelf = bookshelf(knex);