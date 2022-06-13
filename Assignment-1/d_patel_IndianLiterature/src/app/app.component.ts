import { Component, Type } from '@angular/core';
import { Content} from './models/content';
import { List } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='d_patel_IndianLiterature';
  myList:List;
  

  constructor(){
    let contentitem: Content;
      this.myList = new List();

    contentitem = {
       id:0,
       title:'Mahabharat',
       body: 'An origin of Bhagvad-Geeta(a religious book of Hinduism)',
       author: 'Ved Vyas',
       imageLink:'https://images-na.ssl-images-amazon.com/images/I/51egA3JY6YL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
       type: 'Religious Book',
       hashtag: ['A phychological answers of life problems']
    };
this.myList.addContent(contentitem);
contentitem = {
  id:1,
  title:'Brihat Samhita',
  body: 'A Book about astrology and Ancient Indian astronomy(Called Jyotisha)',
  author: 'Varah Mihir',
  imageLink:'https://images-na.ssl-images-amazon.com/images/I/51AeOvSSVjL.jpg',
  type: 'Astrology and mathematics book',
  hashtag: ['In this book, You can find trigonomatry concepts as well as distances and information about our solar system.']
};
this.myList.addContent(contentitem);
contentitem = {
  id:2,
  title:'Natya sastra',
  body: 'A book about performing arts',
  author: 'Bharat Muni',
  imageLink:'https://www.wisdomlib.org/uploads/a/NAL649-NatyaShastra-v2.jpg',
  type: 'Art book',
  hashtag: ['First book to introduce An Art in the world, how to perform and some plots of arts and around 6000 important pieces of art is mentioned by him']
};
this.myList.addContent(contentitem);

contentitem = {
  id:3,
  title:'Shidhaant Shiromani',
  body: 'A book introducing calculus,convention of signs',
  author: 'Bhaskracharya',
  imageLink:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539931535l/42390800._SY475_.jpg',
  type: 'Mathematics book',
  hashtag: ['This book has introduced convention of signs(minus minus makes plus), principle of differential calculus ETC.']
};
this.myList.addContent(contentitem);

  }

  
}
