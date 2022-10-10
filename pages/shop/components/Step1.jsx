import React from 'react'
import BarInput from '../../../common/components/BarInput'

function Step1({DTO, setDTO}) {
  return (
    <div className='flex flex-column justify-center'>
      <h4>Información de Cliente</h4>
      <BarInput 
      name={"email"}
      label={"Email"}
      value={DTO.Email}
      object={DTO}
      setObject={setDTO}
      sx={{width: "300px"}}
      />

      <BarInput
      name={"paymentType"}
      label={"Moneda"}
      value={DTO.paymentType}
      object={DTO}
      setObject={setDTO}
      sx={{width: "300px"}}/>

      <BarInput
      name={"amount"}
      label={"Cantidad"}
      value={DTO.amount}
      object={DTO}
      setObject={setDTO}
      sx={{width: "300px"}}/>
    </div>
  )
}

export default Step1