import styled from "styled-components";

export const ContainerCantResult = styled.div`
  width: 11.375rem;
  height: 2.5rem;
  background: var(--w-white);
  border: none;
  border-radius: 1.25rem;
  opacity: 1;
  display: none;
  justify-content: space-between;
  border: 0.0625rem solid var(--w-grey1);
  align-items: center;
  padding: 0rem 0.5625rem 0rem 0.3125rem;
  @media (min-width: 992px) {
    display: flex;
  }
`;

export const Result = styled.div`
  letter-spacing: 0rem;
  color: var(--color-primary);
  width: 5.625rem;
  height: 1.875rem;
  background: var(--w-white1);
  border-radius: 1.1875rem;
  font-size: 0.875rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--w-black);
  opacity: 1;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  #arrow {
    font-size: 1.375rem;
  }
`;
