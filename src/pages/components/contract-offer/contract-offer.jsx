import { Contract } from '../contract';
import { Footer } from '../footer';
import { Header } from '../header';
import { MainList } from '../main-list';

export const ContractOffer = () => (
  <div>
    <Header />
    <div className='terms_main'>
      <MainList />
      <Contract />
    </div>
    <Footer />
  </div>
);
