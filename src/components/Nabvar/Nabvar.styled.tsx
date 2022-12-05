import styled from "styled-components";

interface IProps {
  border?: string;
  color?: string;
  fontWeigth?: string;
}

export const ContainerNavBar = styled.div`
  width: 100%;
  padding-top: 1.3125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  list-style: none;
  gap: 0.625rem;

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    gap: 0rem;
  }
`;

export const Service = styled.li`
  width: 25%;
  text-align: center;
  border-bottom: ${(props: IProps) => props.border || "none"};
  color: ${(props: IProps) => props.color || "var(--w-black)"};
  font-weight: ${(props: IProps) => props.fontWeigth || "400"};
  padding-bottom: 0.875rem;
  display: flex;
  justify-content: flex-start;
  gap: 0.75rem;
  width: 100%;
  padding-left: 0.625rem;

  @media (min-width: 768px) {
    justify-content: center;
    width: 25%;
    gap: 1.375rem;
    padding-left: 0px;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }

  #preparationIcon {
    font-size: 1.25rem;
  }
`;
