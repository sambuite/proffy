import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem = () => {
  return (
    <Container className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/51120780?s=460&u=87963116901eeba98afc98de4c28c70da9545832&v=4"
          alt="Murilo Sambuite"
        />
        <div>
          <strong>Murilo Sambuite</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        <br />
        Soluta incidunt inventore distinctio error veniam doloribus adipisci eum
        at molestiae non, repellendus veritatis ea? Quos ipsum adipisci nobis
        consequatur, mollitia enim.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
