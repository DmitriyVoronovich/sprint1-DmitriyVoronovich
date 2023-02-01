import StarEmpty from '../book-item/img/emptyStar.png';
import Star from '../book-item/img/Star1.png';
import { BookPageInformation } from '../book-page-information';
import { BookPageReviewList } from '../book-page-review-list';

import './book-page-main.css';

export const BookPageMain = ({ img, rating, name, author, booking, status, reviews }) => {
  let classNames = 'book_page_main_info_status';

  if (booking === 'active') {
    classNames += ' active';
  } else if (booking === 'busy') {
    classNames += ' busy';
  }

  const ratingStar =
    rating === 0 ? (
      <div className='book_page_footer_rating_grade'>
        <ul className='book_page_footer_rating_star'>
          {Array(5)
            .fill((item, index) => index + 1)
            .map((item, index) => (
              <li key={item}>
                <img src={StarEmpty} alt={`star${index}`} />
              </li>
            ))}
        </ul>
        <div>еще нет оценок</div>
      </div>
    ) : (
      <div className='book_page_footer_rating_grade'>
        <ul className='book_page_footer_rating_star'>
          {Array(5)
            .fill((item, index) => index + 1)
            .map((item, index) => (
              <li key={item}>
                <img src={index < Math.floor(rating) ? Star : StarEmpty} alt={`star${index}`} />
              </li>
            ))}
        </ul>
        <div>{rating}</div>
      </div>
    );

  return (
    <div>
      <div className='search_panel_container'>
        <div className='search_panel_text'>Бизнес книги / {name}</div>
      </div>
      <div className='book_page_main'>
        <img src={img} alt='Обложка книги' className='book_page_main_img' />
        <div className='book_page_main_info'>
          <div className='book_page_main_info_title'>{name}</div>
          <div className='book_page_main_info_author'>{author}</div>
          <button className={classNames} type='button'>
            {status}
          </button>
          <div className='book_page_main_info_text'>О книге</div>
          <div className='book_page_main_info_description'>
            <p>
              Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то
              решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута,
              изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое
              время?
            </p>
            <p>
              Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
              алгоритмы — это веселое и увлекательное занятие.
            </p>
          </div>
        </div>
      </div>
      <div className='book_page_footer'>
        <div className='book_page_footer_rating'>
          <div className='book_page_footer_rating_title'>Рейтинг</div>
          <div className='book_page_footer_rating_line'> </div>
          {ratingStar}
        </div>
        <BookPageInformation />
        <BookPageReviewList dataOfReview={reviews} />
      </div>
    </div>
  );
};
