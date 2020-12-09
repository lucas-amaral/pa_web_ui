import React from 'react';

import { Grid } from '@material-ui/core';

import CardContainer from '../../components/Card/CardContainer';

import {
  FirstBody,
  SecondBody,
  Footer,
  BackgroundBody,
  BodyPhraseOne,
  BodyOnePhraseContent,
} from './styles';

import Header from './Header';

export default function Home() {
  return (
    <Grid container direction="column">
      <Header />
      <FirstBody>
        <BackgroundBody />
        <BodyOnePhraseContent>
          <BodyPhraseOne>
            Você no controle do negócio o tempo todo!
          </BodyPhraseOne>
        </BodyOnePhraseContent>
        <Grid container>
          <Grid item md={6}>
            <CardContainer
              title="Encontre o imóvel do jeito que você procura e nas
                            condições que você pode pagar!"
              subtitle="Você nos diz qual é o seu imóvel dos sonhos,
                            características, localizações e como pode pagar por
                            ele! Através de nossa tecnologia encontramos seu
                            imóvel ideal e o melhor, com sua proposta aceita
                            pelo proprietário. Cadastre seu interesse agora
                            mesmo."
              titleAction="Cadastre uma proposta"
            />
          </Grid>
          <Grid item md={6}>
            <CardContainer
              title="Escolha as melhores propostas do mercado e venda
                            seu imóvel de forma simples e pagando menos pela
                            corretagem!"
              subtitle="Você nos diz qual é o seu imóveis dos sonhos,
                            características, localizações e como pode pagar
                            por ele! Através de nossa tecnologia encontramos
                            seu imóvel ideal e o melhor, com sua proposta
                            aceita pelo proprietário. Cadastre seu interesse
                            agora mesmo."
              titleAction="Cadastre uma oferta"
            />
          </Grid>
        </Grid>
      </FirstBody>
      <SecondBody />
      <Footer container />
    </Grid>
  );
}
