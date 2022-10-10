import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 98vw;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;


export const DivElem =  styled.div`
    display: flex;
        flex-direction: row;
        justify-content: space-around;
`

export const DivFather = styled.div`
@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
}

    display: flex;
    flex-direction: row;
    width: 20rem;
    align-content: stretch;
    justify-content: space-between;


.link::before {
    background-color: aquamarine;
    display: inline;
    width: 0%;
    height: 0.2em;
    position: absolute;
    bottom: 0;
    transition: width 0.5s ease-in;
}
`

export const ElemIcons = styled.div`
@media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

    display: flex;
    flex-direction: row;
    width: 20rem;
    align-content: stretch;
    justify-content: space-between;

`