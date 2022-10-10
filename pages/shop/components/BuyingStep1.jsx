import React from 'react'
import BarInput from '../../../common/components/BarInput'
function BuyingStep1({DTO, setDTO}) {
  return (
    <div>
        <h4>Información de Cliente</h4>
          <BarInput 
          label={"Email"}
          value={DTO.email}
          object={DTO}
          setObject={setDTO}
          sx={{width: "300px"}}
          />

          <BarInput
          label={"Combo"}
          value={DTO.combo}
          object={DTO}
          setObject={setDTO}
          sx={{width: "300px"}}
          />
        </div>
  )
}

export default BuyingStep1