import { BookPageReviewItem } from '../book-page-review-item';

import './book-page-review-list.css';

export const BookPageReviewList = ({ dataOfReview }) => {
  const elements = dataOfReview.map((item) => {
    const { id, ...itemProps } = item;

    return <BookPageReviewItem key={id} {...itemProps} />;
  });

  return (
    <div className='book_page_review'>
      <div className='book_page_title_line'>
        <div className='book_page_review_title'>Отзывы</div>
        <span>3</span>
      </div>
      <div className='book_page_review_line'> </div>
      <ul className='book_page_review_list'>{elements}</ul>
    </div>
  );
};
