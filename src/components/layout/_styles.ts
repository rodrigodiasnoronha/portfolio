import styled from 'styled-components';
import { colors } from '../../types';

export const LayoutWrapper = styled.main`
    width: 100%;
    height: 100% !important;
    /* background: var(--bg-primary); */
    background: ${colors.lucyTheme.background2};

    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;

    .content {
        height: 100%;
        flex: 1;
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: ${colors.lucyTheme.pure1};
        overflow-y: scroll;
    }

    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;
