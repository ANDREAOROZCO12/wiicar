import { useState } from "react";

import Swal from "sweetalert2";

import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import NoResults from "../../components/NoResults/NoResults";
import data from "../../data/data.json";

import "./home.css";

const Home = () => {
  const [option, setOption] = useState<string>("0");
  const [filter, setFilter] = useState<string>(" ");

  const handleChange = (e: any) => {
    setOption(e.target.value);
  };

  const handleChangeOne = (e: any) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const initialCont: Array<{ [key: string]: any }> = [];
  const swal = () => {
    Swal.fire({
      title: "Cargando",
      html: '<div class="swal"> <img src="https://acegif.com/wp-content/uploads/loading-12.gif" alt="" /> <div><p class="swalTitle">Cargue masivo</p><p>Espera un momento mientras procesamos los datos, esto puede tardar unos minutos</p></div></div>',
      showConfirmButton: false,
      // timer: 3000,
    }).then(() => {
      window.location.replace("/carlist");
    });
  };

  return (
    <>
      <Header />
      <NoResults />
      {option === "1" && swal()}

      <Footer
        handleChange={handleChange}
        data={data}
        value={filter}
        handleChangeOne={handleChangeOne}
        handleSubmit={handleSubmit}
        cont={initialCont}
      />
    </>
  );
};

export default Home;
