import styled from "styled-components";

export const ContainerResult = styled.div`
  background-color: var(--w-white);
  padding: 20px;
  width: 93%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  overflow-y: scroll;
  @media (min-width: 992px) {
    overflow-y: hidden;
  }

`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 0.0625rem solid var(--w-gray-300);
`;

export const Thead = styled.thead``;
export const Tr = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 0fr 0.38fr 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  height: 3.75rem;
  background: var(--w-grey2);
  border: 0.0625rem solid var(--w-grey1);
  border-radius: 0.375rem;
  padding: 0rem 1rem;
  
  
`;

export const Th = styled.th`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  .arrorUnsorted {
    font-size: 1rem;
    cursor: pointer;
  }
`;
export const Td = styled.td`
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 0.9375rem;
`;
export const TrList = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 0fr 0.38fr 1fr 1fr 1fr 1fr 1fr 1fr 1.5fr 1fr 1fr;
  grid-gap: 1rem;
  align-items: center;
  height: 3.75rem;
  padding: 0rem 1rem;
  #provenance {
    width: 6.3125rem;
    height: 2rem;
    background: var(--color-green);
    border-radius: 1rem;
    color: var(--w-white);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:nth-child(even) {
    background: var(--w-grey2);
  }
`;

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
  width: 18.375rem;
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
`;
