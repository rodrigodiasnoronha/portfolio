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
                        <span>Sobre</span>
                    </Link>
                </li>

                <li>
                    <Link activeClassName="activePage" to="/contact">
                        <ContactIcon size={30} />
                        <span>Contato</span>
                    </Link>
                </li>

                <li>
                    <Link activeClassName="activePage" to="/resume">
                        <ResumeIcon size={30} />
                        <span>Resumo</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </HeaderWrapper>
);

export default Header;
