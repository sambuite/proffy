import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  margin-top: 3.2rem;

  label {
    color: ${({ theme: t }) => t.colors.textInPrimary};
  }

  button {
    width: 100%;
    height: 5.6rem;
    background-color: ${({ theme: t }) => t.colors.secondary};
    color: ${({ theme: t }) => t.colors.buttonText};
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    margin-top: 4.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;

    &:hover {
      background: ${({ theme: t }) => t.colors.secondaryDark};
    }
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
    position: absolute;
    bottom: -28px;

    button {
      bottom: -28px;
    }
  }
`;

export const PageMain = styled.main`
  margin: 3.2rem auto;
  width: 90%;

  @media (min-width: 700px) {
    padding: 3.2rem 0;
    max-width: 740px;
    margin: 0 auto;
  }
`;
