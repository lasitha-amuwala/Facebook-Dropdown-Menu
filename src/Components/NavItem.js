import React, { useState } from 'react';
import classNames from 'classnames';

export const NavItem = ({ icon, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a
        href="#"
        className={classNames('icon-button', { active: open && children })}
        onClick={() => setOpen(!open)}
      >
        {icon}
      </a>
      {open && children}
    </li>
  );
};
