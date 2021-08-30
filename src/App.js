import React from 'react';

import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';

import { NavItem } from './Components/NavItem';
import { DropdownMenu } from './Components/DropdownMenu';

const App = () => (
    <nav className="navbar">
        <ul className="navbar-nav">
            <NavItem icon={<PlusIcon />} />
            <NavItem icon={<MessengerIcon />} />
            <NavItem icon={<BellIcon />} />
            <NavItem icon={<CaretIcon />}>
                <DropdownMenu />
        </NavItem>
        </ul>
    </nav>
);

export default App;
