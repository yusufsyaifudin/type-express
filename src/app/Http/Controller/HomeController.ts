import {Router, Request, Response, NextFunction} from 'express';
import {News} from './../../Models/News';

class HomeController {

  public router: Router;
  
  /**
   * Initialize the HomeController
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    let data = await (new News).query().whereIn('id', [1, 2])
    // let data = await News.where<News>({id: 2}).fetch()

    res.json({
      data: data
    })    
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
export default homeRoutes.router;