import { useNavigate } from 'react-router-dom';

import StarEmpty from './img/emptyStar.png';
import Star from './img/Star1.png';

import './book-item.css';

export const BookItem = ({ id, img, rating, name, author, booking, status, isListView }) => {
  const navigate = useNavigate();

  let classNames = 'book_card_status';

  if (booking === 'active') {
    classNames += ' active';
  } else if (booking === 'busy') {
    classNames += ' busy';
  }

  let classesName = 'book_list_item_author_status';

  if (booking === 'active') {
    classesName += ' active';
  } else if (booking === 'busy') {
    classesName += ' busy';
  }

  const handleClick = () => {
    navigate(`/books/${id}`);
  };

  const ratingStar =
    rating === 0 ? (
      <div className={isListView ? 'book_list_item_rating' : 'book_card_rating'}>еще нет оценок</div>
    ) : (
      <ul className={isListView ? 'book_list_item_rating_star' : 'book_card_rating_star'}>
        {Array(5)
          .fill((item, index) => index + 1)
          .map((item, index) => (
            <li key={item}>
              <img src={index < Math.floor(rating) ? Star : StarEmpty} alt={`star${index}`} />
            </li>
          ))}
      </ul>
    );

  return (
    <div
      className={isListView ? 'book_list_item' : 'book_card'}
      onClick={handleClick}
      onKeyDown={handleClick}
      role='button'
      tabIndex='0'
      data-test-id='card'
    >
      {isListView ? (
        <div>
          <img src={img} alt='Изображение книги' className='book_list_item_img' />
          <div className='book_inf'>
            <div className='book_name_author'>
              <div className='book_list_item_name'> {name} </div>
              <div className='book_list_item_author'> {author} </div>
            </div>
            <div className='book_rating_button'>
              {ratingStar}
              <button className={classesName} type='button'>
                {status}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <img src={img} alt='Изображение книги' className='book_card_img' />
          {ratingStar}
          <div className='book_card_name'> {name} </div>
          <div className='book_card_author'> {author} </div>
          <button className={classNames} type='button'>
            {status}
          </button>
        </div>
      )}
    </div>
  );
};
