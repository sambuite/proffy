import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme: t }) => t.colors.textInPrimary};
  background: ${({ theme: t }) => t.colors.primary};
`;

export const Wrapper = styled.div`
  width: 90vw;
  max-width: 700px;

  > img {
    width: 100%;
  }

  @media (min-width: 1100px) {
    max-width: 1100px;

    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas: 'logo hero hero' 'button buttons total';

    /* LogoContainer */
    div:nth-child(1) {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;

      h2 {
        text-align: initial;
        font-size: 3.6rem;
      }

      img {
        height: 100%;
      }
    }

    > img {
      grid-area: hero;
      justify-self: end;
    }

    /* Buttons */
    > div:nth-child(2) {
      grid-area: buttons;
      justify-content: flex-start;

      a {
        font-size: 2.4rem;
      }
    }

    /* Connections */
    > span {
      grid-area: total;
      justify-self: end;
    }
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    color: ${({ theme: t }) => t.colors.buttonText};

    transition: background-color 0.2s;
  }

  a:first-child {
    margin-right: 1.6rem;
  }

  a > img {
    width: 4rem;
    margin-right: 2.4rem;
  }

  a.study {
    background: ${({ theme: t }) => t.colors.primaryLighter};
  }

  a.study:hover {
    background: ${({ theme: t }) => t.colors.primaryLight};
  }

  a.give-classes {
    background: ${({ theme: t }) => t.colors.secundary};
  }

  a.give-classes:hover {
    background: ${({ theme: t }) => t.colors.secundaryDark};
  }
`;

export const Connections = styled.span`
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 0.8rem;
  }
`;
