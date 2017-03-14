import {Bookshelf} from '../../boot/Database';

export class News extends Bookshelf.Model<News> {

  get tableName() {
    return 'news';
  }

  get defaults() {
    return {
      id: 'number'
    }
  }
  
}