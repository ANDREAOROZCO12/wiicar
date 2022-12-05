import styled from "styled-components";

export const ButtonPagination = styled.button`
  border: transparent;
  background: transparent;
  color: var(--w-black);
  padding: 0.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    background: var(--w-grey2);
    border-radius: 50%;
  }
`;

export const ContainerPagination = styled.div`
  width: 294px;
  height: 4.75rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const ActualPage = styled.div`
  width: 4.375rem;
  height: 2.5rem;
  background: var(--w-white);
  border: 0.0625rem solid var(--w-grey1);
  border-radius: 1.25rem;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export const Parragraph = styled.p`
  font-size: 0.875rem;
  color: var(--w-black);
  text-transform: capitalize;
  display: none;
  @media (min-width: 992px) {
    display: flex;
  }
`;
