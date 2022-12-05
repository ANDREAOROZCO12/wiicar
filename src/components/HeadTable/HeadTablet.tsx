import {FunctionComponent} from 'react'
import { TiArrowUnsorted } from 'react-icons/ti'
import { Th, Thead, Tr } from '../Results/Result.styled'

interface IProps {
    handleOrder: () => void
}

const HeadTablet : FunctionComponent<IProps> = ({handleOrder}) => {
  return (
    <Thead>
    <Tr>
      <th>
        <input type="checkbox" />
      </th>
      <Th>
        ID
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>

      <Th>
        Placa{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Marca
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Modelo
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Kilometraje{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Transmisión{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Tipo{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Precio de compra{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
      <Th>
        Proveniencia{" "}
        <TiArrowUnsorted
          className="arrorUnsorted"
          onClick={handleOrder}
        />
      </Th>
    </Tr>
  </Thead>
  )
}

export default HeadTablet
