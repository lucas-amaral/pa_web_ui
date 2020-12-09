import { createGlobalStyle } from 'styled-components';

import { GRAY, PURPLE_2 } from '../constants/Colors';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        min-height: 100%;
    }

    body {
        /* background: linear-gradient(-180deg, ${GRAY}, ${PURPLE_2}); */
        /* background: linear-gradient(180deg, ${GRAY}, #FFF); */
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        color: #222;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button {
        cursor: pointer;
    }
`;
