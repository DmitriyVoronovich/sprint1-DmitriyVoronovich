import profileImg from './profile-img/avatar.png';

import './profile.css';

export const Profile = () => (
  <div className='profile'>
    <div className='profile_name'>Привет, Иван</div>
    <img className='profile_img' src={profileImg} alt='avatar' />
  </div>
);
