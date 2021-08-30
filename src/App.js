import React from 'react';
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
      <NavItem icon={<PlusIcon/>} />
      <NavItem icon={<BellIcon/>} />
      <NavItem icon={<MessengerIcon/>}/>
    </Navbar>
  );
};

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
};

const NavItem = ({ icon }) => {
  return (
    <li className="nav-irem">
      <a href="#" className="icon-button">
        {icon}
      </a>
    </li>
  );
};
export default App;
