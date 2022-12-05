import { Container, ContainerNoResults, Parragraph } from "./NoResults.styled";

const NoResults = () => {
  return (
    <Container padding="1.875rem 2.75rem 0rem 2.875rem">
      <ContainerNoResults>
        <Parragraph>No existen datos para mostrar</Parragraph>
      </ContainerNoResults>
    </Container>
  );
};

export default NoResults;
