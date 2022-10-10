import styled from "styled-components";

export const ContentDiv = styled.div`
  .aboutToMe {
    display: flex;
    padding: 2rem;
    border: 1px solid white;
    box-shadow: 0px 6px 12px rgb(0 149 213 / 40%);
    flex-direction: column;
    align-items: center;
    width: 35%;
    margin-left: 10%;
    margin-top: 3rem;
  }

  .TextIntroduct {
    color: aqua;
  }
  .imgToMe {
    width: 10rem;
    border-radius: 10rem;
    margin-bottom: 2rem;
  }
  .introduct {
    margin-top: 3rem;
    margin-left: 10%;
  }

  @media (max-width: 800px) {
    .aboutToMe {
      width: 80%;
    }

    .imgToMe {
      width: 5rem;
    }
  }
`;
