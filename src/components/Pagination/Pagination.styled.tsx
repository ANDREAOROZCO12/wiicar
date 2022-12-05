import styled from "styled-components";

export const ButtonPagination = styled.button`
  border: transparent;
  background: transparent;
  color: var(--w-black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem;
  :hover {
    cursor: pointer;
    background: var(--w-grey2);
    border-radius: 50%;
  }

  @media (min-width: 992px) {
    padding: 0.9375rem;
  }
`;

export const ContainerPagination = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 992px) {
    width: 294px;
  }
`;
export const ActualPage = styled.div`
  width: 2.375rem;
  height: 1.2rem;
  background: var(--w-white);
  border: 0.0625rem solid var(--w-grey1);
  border-radius: 1.25rem;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: var(--w-grey1);
  gap: 13px;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    width: 4.375;
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    display: flex;
    height: 2.5rem;
    background: var(--w-white);
  }
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

export const ContainerPaginationMobile = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.875rem;
  width: 100%;
`;
