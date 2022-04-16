import React from "react";
import "./style.scss";
import { ReactComponent as Greenfy } from '../../assets/icons/GreenFy.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/userIcon.svg';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

export const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerContent">
                <div className="headerLogo">
                    <Greenfy className="GreefyLogo" />
                </div>
                <div className="headerLabels">
                    <nav>
                        <ul className="headerMenu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Content</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Support</a></li>
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