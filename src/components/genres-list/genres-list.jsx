import { GenresItem } from '../genres-item';

import './genres-list.css';

export const GenresList = ({ data, isListActive }) => {
  const elements = data
    .filter((item) => item.id && item.name && item.number)
    .map((item) => {
      const { id, ...itemProps } = item;

      return <GenresItem key={id} {...itemProps} />;
    });

  return (
    <div>
      <div className={`genres_title ${isListActive ? 'active_item' : ''}`}>Все книги</div>
      <ul className='genres_list'>{elements}</ul>
    </div>
  );
};
