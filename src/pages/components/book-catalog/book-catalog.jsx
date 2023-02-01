import { BookItem } from '../book-item';

import './boook-catalog.css';

export const BookCatalog = ({ dataOfBooks, isListView }) => {
  const elements = dataOfBooks.map((item) => {
    const { id } = item;

    return <BookItem key={id} {...item} isListView={isListView} />;
  });

  return <div className={isListView ? 'book_list' : 'book_catalog'}>{elements}</div>;
};
