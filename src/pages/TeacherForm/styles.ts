import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  > div .header-content {
    margin-bottom: 6.4rem;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    > div .header-content {
      margin-bottom: 0;
    }
  }
`;

export const Main = styled.main`
  background: ${({ theme: t }) => t.colors.boxBase};
  width: 100%;
  max-width: 74rem;
  border-radius: 0.8rem;
  margin: -3.2rem auto 3.2rem;
  padding-top: 6.4rem;
  overflow: hidden;

  fieldset {
    border: 0;
    padding: 0 2.4rem;

    & + fieldset {
      margin-top: 6.4rem;
    }

    legend {
      font: 700 2.4rem Archivo;
      color: ${({ theme: t }) => t.colors.textTitle};
      margin-bottom: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid ${({ theme: t }) => t.colors.lineInWhite};

      button {
        background: none;
        border: 0;
        color: ${({ theme: t }) => t.colors.primary};
        font: 700 1.5rem Archivo;
        cursor: pointer;
        transition: color 0.2;

        &:hover {
          color: ${({ theme: t }) => t.colors.primaryDark};
        }
      }
    }

    .input-block + .textarea-block,
    .select-block + .input-block {
      margin-top: 2.4rem;
    }
  }

  label {
    color: ${({ theme: t }) => t.colors.textComplement};
  }

  @media (min-width: 700px) {
    fieldset {
      padding: 0 6.4rem;
    }

    .schedule-item {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      column-gap: 1.6rem;
    }
  }
`;

export const Footer = styled.footer`
  padding: 4rem 2.4rem;
  background: ${({ theme: t }) => t.colors.boxFooter};
  border-top: 1px solid ${({ theme: t }) => t.colors.lineInWhite};
  margin-top: 6.4rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: ${({ theme: t }) => t.colors.textComplement};

    img {
      margin-right: 2rem;
    }
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
    margin-top: 3.2rem;
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
    padding: 4rem 6.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      justify-content: space-between;
    }

    button {
      width: 20rem;
      margin-top: 0;
    }
  }
`;
