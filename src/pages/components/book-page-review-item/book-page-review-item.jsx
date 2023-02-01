import StarEmpty from '../book-item/img/emptyStar.png';
import Star from '../book-item/img/Star1.png';

export const BookPageReviewItem = ({ name, img, date, rating, review }) => {
  const ratingStar =
    rating === 0 ? (
      <div className='book_page_review_header_rating'>еще нет оценок</div>
    ) : (
      <ul className='book_page_review_header__rating_star'>
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
    <div className='book_page_review_item'>
      <div className='book_page_review_header'>
        <img className='book_page_review_header_avatar' src={img} alt='Avatar Icon' />
        <div className='book_page_review_header_name'>{name}</div>
        <div className='book_page_review_header_date'>{date}</div>
      </div>
      {ratingStar}
      <div className='book_page_review_text'>{review}</div>
    </div>
  );
};
