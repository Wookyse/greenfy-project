import React, { useState } from 'react';
import './style.scss';
import { ReactComponent as Greenfy } from '../../assets/icons/GreenFy.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/userIcon.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

export const Header = () => {
  const [submenu, setSubMenu] = useState(false);

  const handleMenuClick = () => {
    if (submenu === true) {
      setSubMenu(false);
    } else if (submenu === false) {
      setSubMenu(true);
    }
  };
  return (
    <div className="headerContainer">
      <div className="headerContent">
        <div className="headerLogo">
          <Greenfy className="GreefyLogo" />
        </div>
        <div className="headerLabels">
          <nav>
            <ul className="headerMenu">
              <li>
                <a href="/home" className="color-green">
                  Home
                </a>
              </li>
              <li className="content-submenu">
                <a onClick={handleMenuClick} className="color-green">
                  Content
                </a>
                {submenu ? (
                  <ul className="submenu_header fromLeft">
                    <li>
                      <a href="#" className="fromLeft">
                        Articles
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fromLeft">
                        Journalistic
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fromLeft">
                        Recommendations
                      </a>
                    </li>
                    <li>
                      <a href="#" className="fromLeft">
                        Tips
                      </a>
                    </li>
                    <li>
                      <a href="/home/videos" className="fromLeft">
                        Videos
                      </a>
                    </li>
                  </ul>
                ) : null}
              </li>
              <li>
                <a href="#" className="color-green">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="color-green">
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="headerUserInfo">
          <div className="headerUserIcon">
            <UserIcon />
          </div>
          <div className="headerUserName">
            <h3>Joey Mills</h3>
            <h4>1000 green pts</h4>
            <div className="headerArrowIcon">
              <Arrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
