import logoName from './logo-img/Cleverland.png';
import logoImg from './logo-img/logo-clevertec.png';

import './logo.css';

export const Logo = () => (
  <div className='logo'>
    <img className='logo_img' src={logoImg} alt='logo' />
    <img className='logo_name' src={logoName} alt='logo name' />
  </div>
);
