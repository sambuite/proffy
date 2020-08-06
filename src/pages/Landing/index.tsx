import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Wrapper,
  LogoContainer,
  Buttons,
  Connections,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import pupleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((response) => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <img src={logoImg} alt="" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de Estudos" />

        <Buttons>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </Buttons>

        <Connections>
          Total de {totalConnections} conexões já realizadas
          <img src={pupleHeartIcon} alt="Coração roxo" />
        </Connections>
      </Wrapper>
    </Container>
  );
};

export default Landing;
