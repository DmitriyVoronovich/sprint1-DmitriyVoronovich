import { BookSearch } from '../book-search';
import { CatalogView } from '../catalog-view';

import './input-panel.css';

export const InputPanel = ({ setIsListView, isListView }) => (
  <div className='input_panel'>
    <BookSearch />
    <CatalogView setIsListView={setIsListView} isListView={isListView} />
  </div>
);
