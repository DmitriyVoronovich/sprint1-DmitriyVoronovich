import './book-page-information.css';

export const BookPageInformation = () => (
  <div className='book_information'>
    <div className='book_information_title'>Подробная информация</div>
    <div className='book_information_line'> </div>
    <div className='book_information_table'>
      <table className='book_information_table_one'>
        <td>
          <tr>Издательство</tr>
          <tr>Год издания</tr>
          <tr>Страниц</tr>
          <tr>Переплет</tr>
          <tr>Формат</tr>
        </td>
        <td>
          <tr>Питер</tr>
          <tr>2019</tr>
          <tr>288</tr>
          <tr>Мягкая обложка</tr>
          <tr>70х100</tr>
        </td>
      </table>
      <table className='book_information_table_two'>
        <td>
          <tr>Жанр</tr>
          <tr>Вес</tr>
          <tr>ISBN</tr>
          <tr>Изготовитель</tr>
        </td>
        <td>
          <tr>Компьютерная литература</tr>
          <tr>370 г</tr>
          <tr>978-5-4461-0923-4</tr>
          <tr>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29</tr>
        </td>
      </table>
    </div>
  </div>
);
