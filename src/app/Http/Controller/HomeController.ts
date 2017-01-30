import {Router, Request, Response, NextFunction} from 'express';

class HomeController {

  public router: Router;
  
  /**
   * Initialize the HomeController
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public getAll(req: Request, res: Response, next: NextFunction) {
    res.json({
      x: true
    });
  }


  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }
}

// Create the HomeController, and export its configured Express.Router
const homeRoutes: HomeController = new HomeController();
homeRoutes.init();

export default homeRoutes.router;