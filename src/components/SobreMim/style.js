import styled from "styled-components";

export const ContentDiv = styled.div`
  .aboutToMe {
    display: flex;
    padding: 2rem;
    border: 1px solid white;
    box-shadow: 0px 6px 12px rgba(0, 149, 213, 0.4);
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin-left: 10%;
    margin-top: 3rem;
  }

  .TextIntroduct{
    color: aqua;
  }
  .imgToMe {
    width: 10rem;
    border-radius: 10rem;
    margin-bottom: 2rem;
  }
  .introduct{
    margin-top: 3rem;
    margin-left: 10%;
  }

  @media (max-width: 800px) {


    .imgToMe{
       width: 5rem;
    }
  }

`;
