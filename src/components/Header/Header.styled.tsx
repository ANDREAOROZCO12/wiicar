import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  top: 0;
  position: sticky;
  background: var(--w-white);
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0.0625rem solid var(--w-grey1);
  opacity: 1;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  #menuIcon {
    letter-spacing: 0rem;
    color: var(--color-primary);
    opacity: 1;
    font-size: 1.5625rem;
  }
  @media (min-width: 768px) {
    padding-left: 3.5rem;
    padding-right: 2.75rem;
  }
`;

export const Logo = styled.img`
  background-image: url("/assets/logo-small.png");
  width: 9.125rem;
  height: 2.125rem;
  opacity: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (min-width: 768px) {
    width: 10.375rem;
    height: 2.4375rem;
  }
`;

export const ButtonLogout = styled.button`
  background: var(--w-white);
  width: 5.5rem;
  width: 5.5rem;
  height: 2.5rem;
  border: 0.125rem solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  transition: 240ms;
  :hover {
    background: var(--color-primary);
    color: var(--w-white);
  }
  #logoutIcon {
    font-size: 1.125rem;
  }
`;
