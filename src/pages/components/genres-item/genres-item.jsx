import './genres-item.css';

export const GenresItem = ({ name, number }) => (
  <li className='genres_item'>
    {name}
    <span className='genres_number'>{number}</span>
  </li>
);
