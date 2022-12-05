import { FunctionComponent } from "react";

import { IOption } from "../../model/interfaces";

import { Option, Select } from "./OptionSelect.styled";

const OptionSelect: FunctionComponent<IOption> = ({
  handleChange,
  options,
}) => {
  return (
    <Select onChange={handleChange}>
      {options.map((option) => (
        <Option key={option.id} value={option.id}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default OptionSelect;
