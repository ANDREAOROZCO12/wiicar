import styled from "styled-components";

interface IProps {
  padding?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--w-grey2);
  padding: ${(props: IProps) => props.padding || "0"};
`;

export const ContainerNoResults = styled.div`
  width: 100%;
  height: 5.625rem;
  background: var(--w-white);
  border: 0.0625rem solid var(--w-grey1);
  border-radius: 0.375rem;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Parragraph = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  background: var(--w-grey2);
  border: 0.0625rem solid var(--w-grey1);
  border-radius: 0.375rem;
  letter-spacing: 0rem;
  color: var(--w-grey1);
  font-size: 0.875rem;
`;
