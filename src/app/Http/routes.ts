import HomeController from './Controller/HomeController';

export class Routes {

  public static router()
  {
    // register all routes
    let router = [
      {
        uri: '/',
        class: HomeController
      }
    ];

    return router;
  }

}