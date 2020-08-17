import styled from 'styled-components';
import { colors } from '../../types';

export const ResumeWrapper = styled.div`
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;

    h2.title {
        font-size: 48px;
        margin: 45px 0px;
        font-weight: bold;
        color: ${colors.lucyTheme.accent2};
    }

    .experience p {
    }


    h3 {
        color: ${colors.lucyTheme.accent1};
        font-size: 42px;
        padding: 20px 0px;
        border-top: 1px solid ${colors.lucyTheme.dim1};
    }

    section {
        margin-bottom: 20px;
    }

    p,
    a,
    span {
        font-size: 24px;
        font-weight: 400;
        line-height: 25px;
        margin: 0px;
        padding: 0px;
    }

    a {
        color: ${colors.lucyTheme.const};
    }

    svg {
        margin-right: 5px;
    }

    p {
        display: flex;
        align-items: center;
        margin-top: 8px;
    }

    p a {
        padding-left: 5px;
    }

    ul {
        list-style: none;
        margin: 0px;
    }

    ul li {
        margin-top: 25px;
    }

    ul li a.linkProject {
        font-size: 28px;
        cursor: pointer;
    }

    ul li p {
        font-size: 22px;
        display: inline;
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
        padding: 0px 10px;

        h2.title {
            font-size: 44px;
            margin: 45px 0px 25px;
        }

        h3 {
            font-size: 34px;
            margin: 20px 0px;
            font-weight: bold;
        }

        p,
        a,
        span {
            font-size: 22px;
            font-weight: 400;
            line-height: 25px;
            margin: 0px;
            padding: 0px;
        }
    }
`;
