import React from 'react'
import BarInput from '../../../common/components/BarInput'

function Step3({DTO, setDTO}) {
  return (
    <div>
      <h3>Tarjeta de Crédito</h3>
      <BarInput
        name={"creditCard"}
        label={"Tarjeta de Crédito"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.creditCard}
        sx={{width: "300px"}}/>
    </div>
  )
}

export default Step3