import styled from "styled-components";

export const SignInFormContainer = styled.div`
  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 560px) {
    padding: 0 15px 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  justify-content: center;

  @media screen and (max-width: 440px) {
    grid-gap: 10px;
  }
`;