export interface IFooter{
    handleChange: (e: any) => void;
    data: Array<{ [key: string]: any }>;
    handleChangeOne: (e: any) => void;
    handleSubmit: (e: any) => void;
    value: string;
    cont: Array<{ [key: string]: any }>;
};

export interface ISearch {
    data: Array<{ [key: string]: any }>;
    handleChangeOne?: (e: any) => void;
    handleSubmit?: (e: any) => void;
    value: string;
};

export interface IOption {
    handleChange: (e: any) => void;
  options: Array<{ [key: string]: any }>;
};

export interface IPagination {
    paginate: (pageNumber: number) => void;
    currentPage: number;
    pageNumbers: number[];
    id?: string;
};