import styled from 'styled-components';
import { colors } from '../types';

export const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    overflow-y: scroll;

    .profilePicWrapper {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profilePicWrapper img {
        border-radius: 50%;
        width: 250px;
        height: 250px;
        max-width: 250px;
        max-height: 250px;
        border: 2px solid ${colors.lucyTheme.call};
    }

    .infoWrapper {
        flex: 2;
        padding: 10px;

        margin: auto 0;

        box-sizing: border-box;
        overflow-x: hidden;
    }

    .infoWrapper h2 {
        margin-bottom: 25px;
    }

    .infoWrapper h2,
    .infoWrapper h2 span {
        font-size: 48px;
        font-weight: bold;
    }

    .infoWrapper p {
        font-size: 24px;
        font-weight: 400;
        line-height: 25px;
        margin-top: 8px;
    }

    .infoWrapper p a {
        cursor: pointer;
        text-decoration: none;
    }

    .infoWrapper p a {
    }

    .yellow {
        color: ${colors.lucyTheme.base2};
    }

    .green {
        color: ${colors.lucyTheme.call};
    }

    .orange {
        color: ${colors.lucyTheme.accent2};
    }

    .nodeGreen {
        color: rgb(140, 200, 75);
    }

    .blue {
        color: rgb(42, 199, 227);
    }

    .purple {
        color: rgb(85, 104, 249);
    }

    .gray {
        color: ${colors.lucyTheme.dim2};
    }

    @media (max-width: 800px) {
        display: initial;

        .profilePicWrapper {
            margin-top: 25px;
        }

        .profilePicWrapper img {
            width: 150px;
            height: 150px;
            max-width: 250px;
            max-height: 250px;
            border: 2px solid ${colors.lucyTheme.call};
        }

        .infowrapper {
            flex: 2;
        }

        .infoWrapper h2 {
            font-size: 44px;
        }
    }
`;
