import { Icon } from '@iconify/react';
import './components.css';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation_list">
        <li className="navigation_item">
          <NavLink to={'/'}>
            <Icon
              icon="streamline:camping-tent-solid"
              className="navigation_icon"
              style={{ fontSize: '5vh' }}
            />
          </NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to={'/forests'}>
            <Icon
              icon="ic:round-forest"
              className="navigation_icon"
              style={{ fontSize: '6vh' }}
            />
          </NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to={'/mountains'}>
            <Icon
              icon="mingcute:mountain-2-fill"
              className="navigation_icon"
              style={{ fontSize: '7vh' }}
            />
          </NavLink>
        </li>
        <li className="navigation_item">
          <NavLink to={'/lakes'}>
            <Icon
              icon="fa6-solid:water"
              className="navigation_icon"
              style={{ fontSize: '6vh' }}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
