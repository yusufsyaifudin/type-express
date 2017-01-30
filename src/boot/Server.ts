import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import {Routes} from '../app/Http/routes';


// Creates and configures an ExpressJS web server.
class Server {

  // ref to Express instance
  public Express: express.Application;
  
  //Run configuration methods on the Express instance.
  constructor() {
    this.Express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.Express.use(logger('dev'));
    this.Express.use(bodyParser.json());
    this.Express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints
     */
    // let router = this.Express;

    let routes = Routes.router();
    for (let i = 0; i < routes.length; ++i) {
      this.Express.use(routes[i].uri, routes[i].class);
    }
    
  }
}

export default new Server().Express;