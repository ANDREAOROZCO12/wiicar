import {FunctionComponent}from 'react'
import { BsEyeFill } from 'react-icons/bs'
import { Td, TrList } from '../Results/Result.styled'
import { Option, Select } from '../Select/OptionSelect.styled'


interface IProps {
    sortedData: Array<any>
}

const BodyTable : FunctionComponent<IProps> = ({sortedData}) => {
  return (
    <tbody>
    {sortedData.map((item) => (
      <TrList>
        <Td>
          <input type="checkbox" />
        </Td>
        <Td>{item.id}</Td>
        <Td>{item.placa}</Td>
        <Td>{item.marca}</Td>
        <Td>{item.modelo}</Td>
        <Td>{item.kilometraje}</Td>
        <Td>{item.transmision}</Td>
        <Td>{item.tipo}</Td>
        <Td>$ {item.PrecioCompra}</Td>
        <Td id="provenance">
          {item.proviniencia} <BsEyeFill />
        </Td>
        <Select width="101px" height="32px">
          <Option value="0">Editar</Option>
          <Option value="1">Editar</Option>
          <Option value="2">Almacenar</Option>
        </Select>
      </TrList>
    ))}
  </tbody>
  )
}

export default BodyTable
