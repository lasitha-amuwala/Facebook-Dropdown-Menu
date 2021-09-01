import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as BoltIcon } from '../icons/bolt.svg';

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const dropdownRef = useRef(null);

  // from https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json
  const foodIcons = {
    hamburger: '🍔',
    pizza: '🍕',
    chicken: '🍗',
    bread: '🍞',
    fries: '🍟',
    icecream: '🍦',
    doughnut: '🍩',
    cookie: '🍪',
    cake: '🍰',
    popcorn: '🍿',
  };

  const AnimalIcons = {
    snake: '🐍',
    dog: '🐕',
    pig: '🐖',
    elephant: '🐘',
    honeybee: '🐝',
    turtle: '🐢',
    baby_chick: '🐤',
    bird: '🐦',
    penguin: '🐧',
    camel: '🐫',
  };

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
      <span className="icon-button menu-button">{leftIcon}</span>
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
          <DropdownItem leftIcon={<BsFillPersonFill />}>
            My Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={foodIcons['pizza']}
            rightIcon={<ChevronIcon />}
            goToMenu="food"
          >
            Food
          </DropdownItem>
          <DropdownItem
            leftIcon={AnimalIcons['snake']}
            rightIcon={<ChevronIcon />}
            goToMenu="animals"
          >
            Animals
          </DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings & Privacy
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
            <h2>Settings & Privacy</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<FaLock />}>Privacy</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'food'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Food</h2>
          </DropdownItem>
          {Object.keys(foodIcons).map((food) => (
            <DropdownItem leftIcon={foodIcons[food]}>
              {food.split('_').join(' ')}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          {Object.keys(AnimalIcons).map((animal) => (
            <DropdownItem leftIcon={AnimalIcons[animal]}>
              {animal.split('_').join(' ')}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};
