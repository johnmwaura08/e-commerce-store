import styled from 'styled-components';

const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  /* background: transparent; */
  border: 0.05 rem solid #611f69;
  color: #611f69;
  
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
      
      color: #00FF00;
  }
  &:focus{
      outline: none;
  }
  `;

  export default ButtonContainer;