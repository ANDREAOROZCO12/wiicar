import { FunctionComponent, useState } from "react";

import Search from "../Search/Search";
import { EOptions } from "../../model/enums";
import { IFooter } from "../../model/interfaces";
import CantResult from "../CantResult/CantResult";
import OptionSelect from "../Select/OptionSelect";
import { usePagination } from "../../hook/useCounter";
import Pagination from "../Pagination/Pagination";

import { ContainerResult, Table } from "./Result.styled";
import { Container } from "../NoResults/NoResults.styled";
import { ContainerFooter } from "../Footer/Footer.styled";
import HeadTablet from "../HeadTable/HeadTablet";
import BodyTable from "../BodyTable/BodyTable";
import useOrder from "../../hook/useOrder";
import { ContainerPaginationMobile } from "../Pagination/Pagination.styled";

const Result: FunctionComponent<IFooter> = ({
  data,
  handleChange,
  handleChangeOne,
  handleSubmit,
  value,
  cont,
}) => {
  const {
    pageNumbers,
    paginate,
    currentPage,
    indexOfFirstResult,
    indexOfLastResult,
  } = usePagination(data, 10);
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);

  const [order, setOrder] = useState("asc");

  const handleOrder = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
  };

  const sortedData = useOrder(currentResults, order);

  const options: Array<any> = [
    { id: 0, name: EOptions.AC },
    { id: 1, name: EOptions.ST },
    { id: 2, name: EOptions.CM },
    { id: 3, name: EOptions.DE },
    { id: 4, name: EOptions.NR },
    { id: 5, name: EOptions.EL },
  ];

  return (
    <Container padding="1.875rem 0rem 0rem 0rem">
      <ContainerResult>
        <Table>
          <HeadTablet handleOrder={handleOrder} />
          <BodyTable sortedData={sortedData} />
        </Table>
      </ContainerResult>

      <ContainerFooter>
        <ContainerPaginationMobile>
        <Search
          data={data}
          handleSubmit={handleSubmit}
          value={value}
          handleChangeOne={handleChangeOne}
        />
        <CantResult cont={cont} />
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          id='paginationDesktop'
        />
        <OptionSelect handleChange={handleChange} options={options} />
        </ContainerPaginationMobile>
        <Pagination
          paginate={paginate}
          currentPage={currentPage}
          pageNumbers={pageNumbers}
          id="paginationMobile"
        />
      </ContainerFooter>
    </Container>
  );
};
export default Result;
