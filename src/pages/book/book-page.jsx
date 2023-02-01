import { useNavigate, useParams } from 'react-router-dom';

import { BookPageMain } from '../components/book-page-main';
import { dataOfBooks } from '../components/catalog';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const BookPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const bookData = dataOfBooks.find((bookItem) => bookItem.id === parseInt(id, 10));

  if (!bookData) {
    navigate('/');
  }

  return (
    <section className='book-page'>
      <Header />
      <div className='centre_page'>
        <BookPageMain {...bookData} />
      </div>
      <Footer />
    </section>
  );
};
