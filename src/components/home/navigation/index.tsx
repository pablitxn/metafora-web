import React, { FunctionComponent } from 'react';
import './style.less';

const Navigation: FunctionComponent<INavigationProps> = ({ onPageChange, pageSelected = '00' }) => {
  const handleClassName = (page: Page) => (page === pageSelected ? 'active' : '');

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className={handleClassName('01')}>
          <button type="button" onClick={() => onPageChange('01')}>
            01
          </button>
        </li>
        <li className={handleClassName('02')}>
          <button type="button" onClick={() => onPageChange('02')}>
            02
          </button>
        </li>
        <li className={handleClassName('03')}>
          <button type="button" onClick={() => onPageChange('03')}>
            03
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
