import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = ({ children, leftIcon, rightIcon, goToMenu }) => (
    <a
      href="#"
      className="menu-item"
      onClick={() => goToMenu && setActiveMenu(goToMenu)}
    >
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem>CSS</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem>CSS</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
