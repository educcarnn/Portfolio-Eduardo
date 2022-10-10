import styled from "styled-components";

export const TechsContent = styled.div`
  width: 105%;
  gap: 1rem;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;

  .icons {
    width: 5rem;
    height: 2.5rem;
  }
  @media (max-width: 800px) {
    margin-top: 0rem;
    margin-left: 1em;
  }

  .ButtonPdf {
    color: white;
    background-color: red;
    border: none;
    padding: 1rem;
    border-radius: 1rem;
    font-weight: 800;
    font-family: "Inter", sans-serif;
    cursor: pointer;
    //
  }
`;
