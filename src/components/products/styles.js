import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4%;
  grid-gap: 30px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
`;
