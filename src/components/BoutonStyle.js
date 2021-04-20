import styled from "styled-components";

const BoutonStyle = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: skyblue;
  color: white;
  border: 2px solid white;

  :hover{
    background: transparent;
    color: skyblue;
    border: 2px solid skyblue;
    cursor: pointer;
  }
` 
export default BoutonStyle;