import logoFace from './social-logo/Icon_facebook.png';
import logoIn from './social-logo/Icon_in.png';
import logoInst from './social-logo/Icon_instagram.png';
import logoVk from './social-logo/Icon_vk.png';

import './social-link.css';

export const SocialLink = () => (
  <div className='social_linc'>
    <img src={logoFace} alt='Facebook' className='social_logo' />
    <img src={logoInst} alt='Instagram' className='social_logo' />
    <img src={logoVk} alt='Vk' className='social_logo' />
    <img src={logoIn} alt='In' className='social_logo' />
  </div>
);
