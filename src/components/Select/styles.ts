import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.4rem;

  .select-block {
    position: relative;

    & + .select-block {
      /* margin-top: 1.4rem; */
    }

    label {
      font-size: 1.4rem;
    }

    select {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: ${({ theme: t }) => t.colors.inputBackground};
      border: 1px solid ${({ theme: t }) => t.colors.lineInWhite};
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }

    &:focus-within::after {
      content: '';
      width: calc(100% - 3.2rem);
      height: 2px;
      background: ${({ theme: t }) => t.colors.primaryLight};
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
    }
  }

  @media (min-width: 700px) {
    & .select-block + .select-block {
      margin-top: 0;
    }
  }
`;
