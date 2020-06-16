import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

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

const theme = {
    background: '#fff',
    // background: '#f5f8fb',
    // fontFamily: 'Helvetica Neue',
    headerBgColor: PURPLE_0,
    headerFontColor: '#fff',
    // headerFontSize: '15px',
    botBubbleColor: '#f5f8fb',
    // botFontColor: '#fff',
    // userBubbleColor: '#fff',
    // userFontColor: '#4a4a4a',
};

const useStyles = makeStyles((theme) => ({
    ItemCardOptions: {
        color: 'blue',
        position: 'relative',
        width: '120px',
        border: '1px solid black',
    },
    buttonItem: {
        background: 'white',
        margin: '2px',
        padding: '2px',
        borderRadius: '10px',
    },
    buttonActive: {
        color: 'white',
        background: OCEAN,
        outline: 'none',
    },
    buttonDone: {
        alignSelf: 'flexEnd',
        marginTop: '50px',
    },
}));

export default function ChatBotPA({
    userName,
    setValueTotal,
    setInitialInputValue,
    handleItem,
    headerTitle,
}) {
    const [totalValue, setTotalValue] = useState(null);
    const [churrasqueira, setChurrasqueira] = useState(false);

    const classes = useStyles();

    const Button = ({ name }) => (
        <button
            id={`componentIconsOption${name}`}
            type="button"
            className={classes.buttonItem}
            onClick={() => {
                const componentItem = document.getElementById(
                    `componentIconsOption${name}`
                );
                componentItem.classList.toggle(classes.buttonActive);
                handleItem(name);
            }}
        >
            <span>{name}</span>
        </button>
    );
    return (
        // <ThemeProvider theme={theme}>
        <ChatBot
            headerTitle={headerTitle}
            width="100%"
            height="400px"
            steps={[
                // {
                //     id: '1',
                //     message:
                //         'Quais caracteristicas não podem faltar no seu novo imóvel?',
                //     trigger: '2',
                // },
                // {
                //     id: '2',
                //     previousStep: '1',
                //     component: (
                //         <div style={{ display: 'flex' }}>
                //             <div>
                //                 <Button name="churrasqueira" />

                //                 <Button name="Piscina" setCount />

                //                 <Button name="Salão de Festas" setCount />

                //                 <Button
                //                     name="Estacionamento coberto"
                //                     setCount
                //                 />
                //             </div>
                //             <div>
                //                 <button
                //                     className={classes.buttonDone}
                //                     type="button"
                //                 >
                //                     Concluído
                //                 </button>
                //             </div>
                //         </div>
                //     ),
                //     waitAction: true,
                //     trigger: '3',
                // },
                // {
                //     id: '3',
                //     user: true,
                //     trigger: '4',
                // },
                // {
                //     id: '4',
                //     message: 'tchau',
                //     end: true,
                // },

                {
                    id: '1',
                    message: `Olá ${userName}`,
                    trigger: '2',
                },
                {
                    id: '2',
                    message:
                        'Qual seria o valor máximo que esta disposto a pagar pelo imóvel?',
                    trigger: '3',
                },
                {
                    id: '3',
                    user: true,
                    trigger: '4',
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'Informe um valor númerico';
                        }
                        setValueTotal(value);
                        return true;
                    },
                    placeholder: 'Ex: 200',
                },
                {
                    id: '4',
                    message:
                        'Perfeito, esse valor sera pago 100% em dinheiro à vista?',
                    trigger: '5',
                },
                {
                    id: '5',
                    options: [
                        { value: 1, label: 'Sim', trigger: '6' },
                        { value: 2, label: 'Não', trigger: '7' },
                    ],
                },
                {
                    id: '6',
                    message: 'Ótimo, sendo assim vamos para próxima etapa',
                    end: true,
                },
                {
                    id: '7',
                    message: 'Sem problemas, qual seria o valor de entrada?',
                    trigger: '8',
                },
                {
                    id: '8',
                    user: true,
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'Informe um valor númerico';
                        }
                        setInitialInputValue(value);
                        return true;
                    },
                    trigger: '9',
                },
                {
                    id: '9',
                    message:
                        'Certo, seu valor corresponde a 33% do valor total do imóvel',
                    end: true,
                },
            ]}
        />
        // </ThemeProvider>
    );
}
