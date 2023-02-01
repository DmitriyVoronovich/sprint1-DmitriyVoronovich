import { Link } from 'react-router-dom';

import { Logo } from '../logo';
import { Profile } from '../profile';
import { Title } from '../title';

import './header.css';

export const Header = () => (
  <div className='header'>
    <div className='header_container'>
      <label className='menu__btn' htmlFor='menu__toggle'>
        <span> </span>
      </label>
      <Link to='/'>
        <Logo />
      </Link>
      <Title />
      <Profile />
    </div>
  </div>
);
