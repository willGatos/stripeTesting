import React, {useEffect} from 'react'
import BarInput from '../../../common/components/BarInput'

function Step2({DTO, setDTO}) {

  useEffect(()=>{
    console.log("23")
  },[])
  return (
    <div>
      <h3>Información del Destinatario</h3>
      <BarInput
        name={"receiverName"}
        label={"Nombre Completo"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.receiverName}
        sx={{width: "300px"}}
      />
      <BarInput
        name={"carnet"}
        label={"Carnet"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.carnet}
        sx={{width: "300px"}}
      />
      <BarInput
        name={"province"}
        label={"Provincia"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.province}
        sx={{width: "300px"}}
      />
      <BarInput
        name={"township"}
        label={"Municipio"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.township}
        sx={{width: "300px"}}/>

      <BarInput
        name={"city"}
        label={"Ciudad"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.city}
        sx={{width: "300px"}}/>

      <BarInput
        name={"address"}
        label={"Dirección"}
        object = {DTO}
        setObject={setDTO}
        value={DTO.address}
        sx={{width: "300px"}}/>
    </div>
  )
}

export default Step2