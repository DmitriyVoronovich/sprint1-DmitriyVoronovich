import { useState } from 'react';

import { BookCatalog } from '../book-catalog';
import { InputPanel } from '../input-panel';

import BookImg from './img/book.png';
import NoImg from './img/noImg.png';

import './catalog.css';

export const dataOfBooks = [
  {
    img: BookImg,
    rating: 0,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 1,
  },
  {
    img: BookImg,
    rating: 4.3,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 2,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. ',
    author: 'Адитья Бхаргава, 2019',
    booking: 'busy',
    status: 'занята до 03.05',
    id: 3,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 4,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    booking: 'no-active',
    status: 'Забронировать',
    id: 5,
  },
  {
    img: NoImg,
    rating: 0,
    name: 'Грокаем алгоритмы. Иллюстрированное ',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    booking: 'busy',
    status: 'Занята до 23.04',
    id: 6,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. ',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 7,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, Патрик Нимейер, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 8,
  },
  {
    img: BookImg,
    rating: 4,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 9,
  },
  {
    img: NoImg,
    rating: 4,
    name: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
    author: 'Адитья Бхаргава, 2019',
    booking: 'active',
    status: 'Забронировать',
    id: 10,
  },
];

export const Catalog = () => {
  const [isListView, setIsListView] = useState(false);

  return (
    <div className='catalog'>
      <InputPanel isListView={isListView} setIsListView={setIsListView} />
      <BookCatalog dataOfBooks={dataOfBooks} isListView={isListView} />
    </div>
  );
};
