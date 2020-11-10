import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { useSelector, useDispatch } from 'react-redux';
import CustomSelectComponent from './customSelectComponent';

import { Types as InterestTypes } from '../../../../../store/ducks/interest';

export default function ChatBotPA({ userName, headerTitle }) {
    const dispatch = useDispatch();
    const [values, setValues] = useState([]);

    const testeState = useSelector((state) => state.announcement);

    useEffect(() => console.log('testeState', testeState), [testeState]);

    useEffect(() => console.log('values', values), [values]);

    const [selectedPropertyTypes, setPropertyType] = useState({
        0: { name: 'CASA', postName: 'HOUSE', value: false },
        1: { name: 'APTO', postName: 'APARTMENT', value: false },
    });

    const [selectedConvenience, setConvenience] = useState({
        0: { name: 'CHURRASQUEIRA', value: false },
        1: { name: 'SACADA', value: false },
        2: { name: 'ELEVADOR', value: false },
        3: { name: 'PISCINA', value: false },
    });

    const [selectedNeighborhood, setSelectedNeighborhood] = useState({
        0: { name: 'CENTRO', value: false },
        1: { name: 'BOI MORTO', value: false },
        2: { name: 'CAMOBI', value: false },
    });

    const updateValue = (value, valueName, nextStep) => {
        values[valueName] = value;
        setValues(values);

        dispatch({
            type: InterestTypes.UPDATE_INTEREST,
            interest: { ...values },
        });

        return nextStep;
    };

    const getValues = () => {
        let stringValue = '';
        if (values) {
            values.forEach((value) => {
                console.log('value', value);
                stringValue = `${stringValue}, ${value}`;
            });
        }
        return stringValue;
    };

    return (
        <ChatBot
            headerTitle={headerTitle}
            width="100%"
            height="400px"
            steps={[
                {
                    id: 'infoMessage1',
                    message: `Olá ${userName} eu sou o P.A! Vou ajudar você a encontrar o imóvel dos sonhos da melhor forma que você pode pagar`,
                    trigger: 'infoMessage2',
                },
                {
                    id: 'infoMessage2',
                    message: `Primeiro, preciso entender quais as características MÍNIMAS que você está buscando em um imóvel, mantenha a mente aberta assim receberá mais opções de imóveis ;)`,
                    trigger: 'infoMessage3',
                },
                {
                    id: 'infoMessage3',
                    message: `Vamos começar com o tipo de imóvel, selecione os tipos que você aceitaria morar:`,
                    trigger: 'properties',
                },
                {
                    id: 'properties',
                    previousStep: 'infoMessage3',
                    component: (
                        <CustomSelectComponent
                            updateValue={updateValue}
                            selectedOptions={selectedPropertyTypes}
                            setSelectedOptions={setPropertyType}
                            componentName="properties"
                        />
                    ),
                    trigger: 'roomsLabel',
                    waitAction: true,
                },
                {
                    id: 'roomsLabel',
                    message: `Qual o MÍNIMO de nº de dormitórios?`,
                    trigger: 'roomsQuestion',
                },
                {
                    id: 'roomsQuestion',
                    options: [
                        {
                            value: 1,
                            label: '1 (UM)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'roomsNumber',
                                    'bathroomsLabel'
                                ),
                        },
                        {
                            value: 2,
                            label: '2 (DOIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'roomsNumber',
                                    'bathroomsLabel'
                                ),
                        },
                        {
                            value: 3,
                            label: '3 (TRÊS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'roomsNumber',
                                    'bathroomsLabel'
                                ),
                        },
                        {
                            value: 4,
                            label: '4 (QUATRO)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'roomsNumber',
                                    'bathroomsLabel'
                                ),
                        },
                        {
                            value: 5,
                            label: '5 (CINCO OU MAIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'roomsNumber',
                                    'bathroomsLabel'
                                ),
                        },
                    ],
                },
                {
                    id: 'bathroomsLabel',
                    message: `- Qual o MÍNIMO de banheiros no total  (incluindo suíte)?`,
                    trigger: 'bathroomsQuestion',
                },
                {
                    id: 'bathroomsQuestion',
                    options: [
                        {
                            value: 1,
                            label: '1 (UM)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'bathroomsNumber',
                                    'garageLabel'
                                ),
                        },
                        {
                            value: 2,
                            label: '2 (DOIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'bathroomsNumber',
                                    'garageLabel'
                                ),
                        },
                        {
                            value: 3,
                            label: '3 (TRÊS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'bathroomsNumber',
                                    'garageLabel'
                                ),
                        },
                        {
                            value: 4,
                            label: '4 (QUATRO)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'bathroomsNumber',
                                    'garageLabel'
                                ),
                        },
                        {
                            value: 5,
                            label: '5 (CINCO OU MAIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'bathroomsNumber',
                                    'garageLabel'
                                ),
                        },
                    ],
                },
                {
                    id: 'garageLabel',
                    message: `- E Vagas de Garagem, qual seria o MÍNIMO?`,
                    trigger: 'garageQuestion',
                },
                {
                    id: 'garageQuestion',
                    options: [
                        {
                            value: 1,
                            label: '1 (UM)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'garageNumber',
                                    'infoMessage4'
                                ),
                        },
                        {
                            value: 2,
                            label: '2 (DOIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'garageNumber',
                                    'infoMessage4'
                                ),
                        },
                        {
                            value: 3,
                            label: '3 (TRÊS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'garageNumber',
                                    'infoMessage4'
                                ),
                        },
                        {
                            value: 4,
                            label: '4 (QUATRO)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'garageNumber',
                                    'infoMessage4'
                                ),
                        },
                        {
                            value: 5,
                            label: '5 (CINCO OU MAIS)',
                            trigger: (value) =>
                                updateValue(
                                    value.value,
                                    'garageNumber',
                                    'infoMessage4'
                                ),
                        },
                    ],
                },
                {
                    id: 'infoMessage4',
                    message: `- Excelente, assim já consigo começar a busca...`,
                    trigger: 'infoMessage5',
                },
                {
                    id: 'infoMessage5',
                    message: `- Você teria mais alguma exigência para se mudar, como Elevadou ou Churrasqueira?`,
                    trigger: 'comodityesQuestion',
                },
                {
                    id: 'comodityesQuestion',
                    options: [
                        {
                            value: 1,
                            label: 'SIM',
                            trigger: 'convenience',
                        },
                        {
                            value: 2,
                            label: 'NÃO',
                            trigger: 'infoMessage6',
                        },
                    ],
                },
                {
                    id: 'convenience',
                    previousStep: 'comodityesQuestion',
                    component: (
                        <CustomSelectComponent
                            updateValue={updateValue}
                            selectedOptions={selectedConvenience}
                            setSelectedOptions={setConvenience}
                            componentName="convenience"
                        />
                    ),
                    trigger: 'infoMessage6',
                    waitAction: true,
                },
                {
                    id: 'infoMessage6',
                    message: `- Vamos falar sobre a localização, selecione TODOS os bairros que você deseja incluir na busca?`,
                    trigger: 'neighborhood',
                },
                {
                    id: 'neighborhood',
                    previousStep: 'infoMessage6',
                    component: (
                        <CustomSelectComponent
                            updateValue={updateValue}
                            selectedOptions={selectedNeighborhood}
                            setSelectedOptions={setSelectedNeighborhood}
                            componentName="neighborhood"
                        />
                    ),
                    trigger: '6',
                    waitAction: true,
                },
                {
                    id: '6',
                    message:
                        'Agora, para entender o seu contexto financeiro, preciso saber qual sua proposta, incluindo bens que pode oferecer na troca? (Não se preocupe, esta informação é sigilosa e será utilizada para encontrar os imóveis que aceitam sua proposta)',
                    trigger: 'infoMessage6',
                },
                {
                    id: 'infoMessage6',
                    message: 'Qual valor seria em dinheiro à vista?',
                    trigger: 'howMuchMoneyQuestion',
                },
                {
                    id: 'howMuchMoneyQuestion',
                    user: true,
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'Informe somente números, por exemplo 50.000';
                        }
                        updateValue(value, 'cashValue', 'infoMessage7');
                        return true;
                    },
                    trigger: 'infoMessage7',
                },
                {
                    id: 'infoMessage7',
                    message:
                        'Qual valor seria em carta de crédito/financiamento imobiliário?',
                    trigger: 'creditCardQuestion',
                },
                {
                    id: 'creditCardQuestion',
                    user: true,
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'Informe somente números, por exemplo 50.000';
                        }
                        updateValue(value, 'creditCardValue', 'infoMessage8');
                        return true;
                    },
                    trigger: 'infoMessage8',
                },
                {
                    id: 'infoMessage8',
                    message:
                        'Qual valor seria em permuta/troca por outro(s) bem(ns)?',
                    trigger: 'exchangeQuestion',
                },
                {
                    id: 'exchangeQuestion',
                    user: true,
                    validator: (value) => {
                        if (isNaN(value)) {
                            return 'Informe somente números, por exemplo 50.000';
                        }
                        updateValue(value, 'exchangeValue', 'results');
                        return true;
                    },
                    trigger: 'results',
                },
                {
                    id: 'results',
                    message:
                        'Perfeito, já tenho todas as informações que preciso. Confirme no card ao lado se todas as informações estão corretas e clique em submeter.',
                    end: true,
                },
            ]}
        />
    );
}
