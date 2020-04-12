import styled from 'styled-components';
import { colors } from '../../types/index';

export const HeaderWrapper = styled.header`
    .activePage {
        color: ${colors.lucyTheme.accent2} !important;

        svg {
            color: ${colors.lucyTheme.accent2} !important;
        }
    }

    nav ul {
        list-style: none;
        margin: 0px;
    }

    nav ul li {
        padding: 10px;
    }

    nav ul li a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 22px;
        text-transform: uppercase;
        font-weight: bold;
        color: ${colors.lucyTheme.dim2};
    }

    nav ul li a span {
        font-weight: bold;
    }

    nav ul li a svg {
        margin-bottom: 5px;
    }

    /* Responsible */
    @media (max-width: 800px) {
        width: 100%;
        max-height: 70px;
        background: ${colors.lucyTheme.background3};

        nav ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }

        nav ul li a svg,
        nav ul li a,
        nav ul li a span {
            font-size: 18px;
        }
    }
`;
