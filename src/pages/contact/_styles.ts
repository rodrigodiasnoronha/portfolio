import styled from 'styled-components';
import { colors } from '../../types';

export const ContactWrapper = styled.div`
    h2.title {
        font-size: 52px;
        font-weight: bold;
        padding: 20px;

        @media (max-width: 700px) {
            font-size: 42px;
        }
    }

    h2.title::selection {
        background: #fff;
    }

    div.email {
        padding: 10px;
    }

    div.email a {
        display: flex;
        align-items: center;
        font-size: 23px;
        color: ${colors.lucyTheme.dim4};
        margin: 15px 0px;

        @media (max-width: 800px) {
            font-size: 22px;
        }
    }

    div.email a svg {
        margin-right: 8px;
    }

    ul.social-media {
        list-style: none;
        margin: 0px;

        display: flex;
        flex-direction: column;
    }

    ul.social-media li {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px;
    }

    ul.social-media li a {
        display: flex;
        align-items: center;

        font-size: 24px;
        color: ${colors.lucyTheme.call};
        border-bottom: 1px solid transparent;
        text-decoration: none;
    }

    ul.social-media li a svg {
        margin-right: 5px;
    }

    ul.social-media li a:hover {
        filter: brightness(70%);
        transition: filter border-bottom 0.5s;
        border-bottom: 1px solid ${colors.lucyTheme.call};
    }
`;
