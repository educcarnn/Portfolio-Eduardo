import styled from "styled-components";

export const QualificationsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;

  .carousel {
    width: 50%;
  }

  @media (max-width: 800px) {
    .carousel {
      width: 90%;
    }
  }
`;
