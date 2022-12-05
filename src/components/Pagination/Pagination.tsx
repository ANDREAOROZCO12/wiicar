import { FunctionComponent } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IPagination } from "../../model/interfaces";

import {
  ActualPage,
  ButtonPagination,
  ContainerPagination,
  Parragraph,
} from "./Pagination.styled";

const Pagination: FunctionComponent<IPagination> = ({
  paginate,
  currentPage,
  pageNumbers,
  id
}) => {
  return (
    <ContainerPagination id={id}>
      <ButtonPagination
        onClick={() =>
          currentPage > 1 ? paginate(currentPage - 1) : paginate(currentPage)
        }
      >
        <IoIosArrowBack/>
      </ButtonPagination>
      <ActualPage>{currentPage}</ActualPage>
      <Parragraph>
        {currentPage} de {pageNumbers.length}
      </Parragraph>

      <ButtonPagination
        onClick={() =>
          currentPage < pageNumbers.length
            ? paginate(currentPage + 1)
            : paginate(currentPage)
        }
      >
        <IoIosArrowForward />
      </ButtonPagination>
    </ContainerPagination>
  );
};

export default Pagination;
