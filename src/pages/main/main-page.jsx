import { Catalog } from '../../components/catalog';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { MainList } from '../../components/main-list';

import './main-page.css';

export const MainPage = () => (
  <section className='main-page'>
    <Header />
    <div className='centre_page'>
      <MainList />
      <Catalog />
    </div>
    <Footer />
  </section>
);
