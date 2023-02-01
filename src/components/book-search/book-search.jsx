import SearchIcon from './icon/Icon_search.png';
import RatingIcon from './icon/icon-sort-ascending.png';

import './book-search.css';

export const BookSearch = () => (
  <div className='input_form'>
    <form>
      <input type='string' placeholder='Поиск книги или автора...' className='book_search' />
      <img alt='' src={SearchIcon} className='book_search_icon' />
    </form>
    <form>
      <input type='string' placeholder='По рейтингу' className='book_rating' />
      <img alt='' src={RatingIcon} className='book_rating_icon' />
    </form>
  </div>
);
