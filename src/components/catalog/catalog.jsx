import {useState} from 'react';

import {dataOfBooks} from '../../utils/data';
import {BookCatalog} from '../book-catalog';
import {InputPanel} from '../input-panel';

import './catalog.css';

export const Catalog = () => {
  const [isListView, setIsListView] = useState(false);

  return (
    <div className='catalog'>
      <InputPanel isListView={isListView} setIsListView={setIsListView} />
      <BookCatalog dataOfBooks={dataOfBooks} isListView={isListView} />
    </div>
  );
};
