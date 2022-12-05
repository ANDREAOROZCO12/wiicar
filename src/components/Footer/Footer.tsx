import { FunctionComponent } from "react";

import Search from "../Search/Search";
import { EOptions } from "../../model/enums";
import { IFooter } from "../../model/interfaces";
import CantResult from "../CantResult/CantResult";
import OptionSelect from "../Select/OptionSelect";
import Pagination from "../Pagination/Pagination";

import { ContainerFooter } from "./Footer.styled";

const Footer: FunctionComponent<IFooter> = ({
  handleChange,
  data,
  handleSubmit,
  value,
  handleChangeOne,
  cont,
}) => {
  const paginate = (pageNumber: number) => 0;

  const options = [
    { id: 0, name: EOptions.AC },
    { id: 1, name: EOptions.CM },
    { id: 2, name: EOptions.NR },
  ];

  return (
    <ContainerFooter>
      <Search
        data={data}
        handleSubmit={handleSubmit}
        value={value}
        handleChangeOne={handleChangeOne}
      />
      <CantResult cont={cont} />
      <Pagination paginate={paginate} currentPage={1} pageNumbers={[1]} id='paginationDesktop' />
      <OptionSelect handleChange={handleChange} options={options} />
      <Pagination
        paginate={paginate}
        currentPage={1}
        pageNumbers={[1]}
        id="paginationMobile"
      />
    </ContainerFooter>
  );
};

export default Footer;
