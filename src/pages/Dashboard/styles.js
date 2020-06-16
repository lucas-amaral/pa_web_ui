import styled from 'styled-components';

import { Button } from '@material-ui/core';

import {
    SKYBLUE,
    OCEAN,
    BLACK,
    GRAY,
    PURPLE_0,
    PURPLE_1,
    PURPLE_2,
    PURPLE_3,
} from '../../constants/Colors';

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

export const ButtonExit = styled(Button)`
    color: white;
    font-size: 18px;
    font-weight: 700;
    opacity: 0.8;
`;
