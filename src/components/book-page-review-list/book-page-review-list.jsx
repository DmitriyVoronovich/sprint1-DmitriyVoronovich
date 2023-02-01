import {BookPageReviewItem} from '../book-page-review-item';

import './book-page-review-list.css';

export const BookPageReviewList = ({dataOfReview}) => {
  const elements = dataOfReview?.map((item) => {
    const {id, ...itemProps} = item;

    return <BookPageReviewItem key={id} {...itemProps} />;
  });

  return (
    <div className='book_page_review'>
      <div className='book_page_title_line'>
        <div className='book_page_review_title'>Отзывы</div>
        <span>{dataOfReview ? dataOfReview.length : 0}</span>
      </div>
      {dataOfReview ? (<div>
        <div className='book_page_review_line' />
        <ul className='book_page_review_list'>{elements}</ul>
      </div>) : null}
    </div>
  );
};
