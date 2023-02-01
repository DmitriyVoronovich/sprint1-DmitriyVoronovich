import { Footer } from '../footer';
import { Header } from '../header';
import { MainList } from '../main-list';
import { Terms } from '../terms';

import './terms-of-use.css';

export const TermsOfUse = () => (
  <div>
    <Header />
    <div className='terms_main'>
      <MainList />
      <Terms />
    </div>
    <Footer />
  </div>
);
