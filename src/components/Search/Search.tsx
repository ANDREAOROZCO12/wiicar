import { FunctionComponent } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { ISearch } from "../../model/interfaces";

import { Button, Form, Input } from "./Search.styled";

const Search: FunctionComponent<ISearch> = ({
  data,
  handleChangeOne,
  handleSubmit,
  value,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleChangeOne}
        placeholder="Búsqueda Por Coincidencia"
      />
      <Button type="submit">
        <AiOutlineSearch id="search" />
      </Button>
    </Form>
  );
};

export default Search;
