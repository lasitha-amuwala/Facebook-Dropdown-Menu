import React, { useState } from 'react';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
};

const DropdownMenu = () => {
    
  const DropdownItem = ({ children, leftIcon, rightIcon }) => (
    <a href="#" className="menu-item">
      <span className="icon-button">{leftIcon}</span>
      {children}
      <span className="icon-right">{rightIcon}</span>
    </a>
  );

  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
      ></DropdownItem>
    </div>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpenClose = () => setOpen(!open);

  return (
    <li className="nav-irem">
      <a href="#" className="icon-button" onClick={handleOpenClose}>
        {icon}
      </a>
      {open && children}
    </li>
  );
};
export default App;
