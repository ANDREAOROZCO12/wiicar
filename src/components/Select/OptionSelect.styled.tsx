import styled from "styled-components";

interface IProps {
  width?: string;
  height?: string;
}

export const Select = styled.select`
  width: ${(props: IProps) => props.width || "70%"};
  height: ${(props: IProps) => props.height || "40px"};
  background: var(--color-primary);
  border: 0.125rem solid var(--color-primary);
  border-radius: 3.125rem;
  color: var(--w-white);
  text-align: center;
  cursor: pointer;

  :hover {
    background: white;
    color: var(--color-primary);
  }
  :focus {
    background: white;
    color: var(--color-primary);
  }
  @media (min-width: 992px) {
    width: ${(props: IProps) => props.width || "263px"};
  }
`;
export const Option = styled.option`
  color: black;
  font-size: 14px;
  text-align: center;
`;
