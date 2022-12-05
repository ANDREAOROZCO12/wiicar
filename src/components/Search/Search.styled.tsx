import styled from "styled-components";

export const Form = styled.form`
  width: 70%;
  height: 2.5rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 0.0625rem solid #c5cbda;
  border-radius: 1.25rem;
  opacity: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 1rem;
  @media (min-width: 992px) {
    width: 24rem;
  }
`;

export const Input = styled.input`
  border: transparent;
  outline: none;

  &::placeholder {
    font-size: 14px;
    letter-spacing: 0px;
    color: #c5cbda;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background: white;
  #search{
letter-spacing: 0px;
color: #000000;
opacity: 1;
font-size: 20px;

  }
`;
