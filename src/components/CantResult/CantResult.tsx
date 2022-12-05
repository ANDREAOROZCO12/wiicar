import { FunctionComponent } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import { ContainerCantResult, Result, Text } from "./CantResult.styled";

interface IProps {
  cont: Array<{ [key: string]: any }>;
}
const CantResult: FunctionComponent<IProps> = ({ cont }) => {
  const cantResult = cont.length;

  return (
    <ContainerCantResult>
      <Result>Resultados</Result>
      <Text>
        {cantResult} <MdKeyboardArrowDown id="arrow" />
      </Text>
    </ContainerCantResult>
  );
};

export default CantResult;
