import styled from "styled-components";

export const ContainerFooter = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  position: sticky;
  box-shadow: 0rem -0.1875rem 0.375rem var(--w-black1);
  flex-direction: column;
  background: var(--w-white);
  padding: 0.625rem 0rem;
  gap: 15px;
  #paginationDesktop{
    display: none;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    height: 4.375rem;
    padding: 0rem;
    gap: 0rem;
    #paginationMobile{
      display: none;
    }
    #paginationDesktop{
    display: flex;
  }
  }
`;

