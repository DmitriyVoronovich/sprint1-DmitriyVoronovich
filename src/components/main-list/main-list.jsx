import { Link, useLocation } from 'react-router-dom';

import { GenresList } from '../genres-list';

import './main-list.css';

const data = [
  { name: 'Бизнес-книги', number: 14, id: 1 },
  { name: 'Детективы', number: 8, id: 2 },
  { name: 'Детские книги', number: 14, id: 3 },
  { name: 'Зарубежная литература', number: 2, id: 4 },
  { name: 'История', number: 5, id: 5 },
  { name: 'Классическая литература', number: 12, id: 14 },
  { name: 'Книги по психологии', number: 11, id: 6 },
  { name: 'Компьютерная литература', number: 54, id: 7 },
  { name: 'Культура и исскуство', number: 5, id: 8 },
  { name: 'Наука и образование', number: 2, id: 9 },
  { name: 'Публицистическая литература', number: '0', id: 10 },
  { name: 'Справочники', number: 10, id: 11 },
  { name: 'Фантастика', number: 12, id: 12 },
  { name: 'Юмористическая литература', number: 8, id: 13 },
];

export const MainList = () => {
  const { pathname } = useLocation();
  const isMainPage = pathname === '/';

  return (
    <div className='main_list'>
      <div className={`main_list_title ${isMainPage ? 'active_item' : ''}`}>Витрина книг</div>
      <GenresList data={data} isListActive={isMainPage} />
      <Link to='/terms'>
        <h5 className={`main_list_terms ${pathname === '/terms' ? 'active_item' : ''}`}>Правила пользования</h5>
      </Link>
      <Link to='/contract'>
        <h5 className={`main_list_contract ${pathname === '/contract' ? 'active_item' : ''}`}>Договор оферты</h5>
      </Link>
    </div>
  );
};
