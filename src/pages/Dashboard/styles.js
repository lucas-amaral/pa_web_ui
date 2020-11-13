import styled from 'styled-components';

import { OCEAN } from '../../constants/Colors';

export const StyledFooterMenuWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    height: 100%;
`;

export const StyledFooterExit = styled.div`
    background: ${OCEAN};
    width: 239px;
`;
