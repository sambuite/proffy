import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.4rem;

  .textarea-block {
    position: relative;

    & + .textarea-block {
      /* margin-top: 1.4rem; */
    }

    label {
      font-size: 1.4rem;
    }

    textarea {
      width: 100%;
      height: 16rem;
      min-height: 8rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: ${({ theme: t }) => t.colors.inputBackground};
      border: 1px solid ${({ theme: t }) => t.colors.lineInWhite};
      outline: 0;
      resize: vertical;
      padding: 1.2 1.6rem;
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
      bottom: 7px;
    }
  }

  @media (min-width: 700px) {
    & .textarea-block + .textarea-block {
      margin-top: 0;
    }
  }
`;
