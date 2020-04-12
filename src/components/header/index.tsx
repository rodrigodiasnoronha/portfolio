import React from 'react';
import { Link } from 'gatsby';
import { HeaderWrapper } from './_styles';
import {
    FiUser as AboutIcon,
    FiAtSign as ContactIcon,
    FiAlignLeft as ResumeIcon,
} from 'react-icons/fi';

const Header: React.FC = () => (
    <HeaderWrapper>
        <nav>
            <ul>
                <li>
                    <Link activeClassName="activePage" to="/">
                        <AboutIcon size={30} />
                        <span>About</span>
                    </Link>
                </li>

                <li>
                    <Link activeClassName="activePage" to="/contact">
                        <ContactIcon size={30} />
                        <span>Contact</span>
                    </Link>
                </li>

                <li>
                    <Link activeClassName="activePage" to="/resume">
                        <ResumeIcon size={30} />
                        <span>Resume</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </HeaderWrapper>
);

export default Header;
