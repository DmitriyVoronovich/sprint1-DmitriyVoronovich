import { ReactComponent as IconKub } from './catalog-view-icon/kub_icon.svg';
import { ReactComponent as IconLine } from './catalog-view-icon/list_icon.svg';

import './catalog-view.css';

export const CatalogView = ({ setIsListView, isListView }) => (
  <div className='button_group'>
    <button
      onClick={() => setIsListView(false)}
      type='button'
      data-test-id='button-menu-view-window'
      className={`button_icon_kub ${isListView ? '' : 'active_icon'}`}
    >
      <IconKub />
    </button>
    <button
      onClick={() => setIsListView(true)}
      type='button'
      data-test-id='button-menu-view-list'
      className={`button_icon_line ${isListView ? 'active_icon' : ''}`}
    >
      <IconLine fill='red' />
    </button>
  </div>
);
