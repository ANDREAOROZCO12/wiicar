import { Header } from "../../components/Header/Header";
import { useState } from "react";
import data from "../../data/data.json";
import Footer from "../../components/Footer/Footer";
import Result from "../../components/Results/Result";

const CarList = () => {
  const [option, setOption] = useState("0");
  const handleChange = (e: any) => {
    setOption(e.target.value);
  };
  const [filter, setFilter] = useState("");
  const handleChangeOne = (e: any) => {
    setFilter(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  const filteredData = data.filter((item) => {
    const placa = item.placa.toLowerCase();
    const marca = item.marca.toLowerCase();
    const modelo = item.modelo.toLowerCase();
    const transmision = item.transmision.toLowerCase();
    const tipo = item.tipo.toLowerCase();
    const proviniencia = item.proviniencia.toLowerCase();
    return (
      placa.includes(filter) ||
      marca.includes(filter) ||
      modelo.includes(filter) ||
      transmision.includes(filter) ||
      tipo.includes(filter) ||
      proviniencia.includes(filter)
    );
  });

  return (
    <>
      <Header />
      <Result
        data={filteredData}
        handleChange={handleChange}
        handleChangeOne={handleChangeOne}
        handleSubmit={handleSubmit}
        value={filter}
        cont={filteredData}
      />
    </>
  );
};

export default CarList;
