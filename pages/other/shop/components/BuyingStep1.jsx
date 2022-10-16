import React,{useEffect} from 'react'
import BarInput from '../../../common/components/BarInput'
import ComboSelector from '../../../common/components/ComboSelector'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function BuyingStep1({
  DTO, 
  setDTO,
  actualReceivers,
  selectedReceiver,
  setSelectedReceiver,
  children
}) {

  const handleChange = (event) => {
    const selected = event.target.value
    console.log(selected)
    setSelectedReceiver(selected);
    actualReceivers.map(receiver=>{
      if(receiver.receiverName === selected){
        setDTO({...DTO,
        receiverName: receiver.receiverName,
        carnet: receiver.carnet,
        province: receiver.province,
        township: receiver.township,
        city: receiver.city,
        address: receiver.address,
        phone: receiver.phone,
      })
      }
    })
    
  };

  return (
    <div>
        <h4>Información de Cliente</h4>
          <BarInput 
            name={"clientName"}
            label={"Nombre"}
            value={DTO.clientName}
            object={DTO}
            setObject={setDTO}
            sx={{width: "300px"}}
          />

          <BarInput 
          name={"email"}
          label={"Email"}
          value={DTO.email}
          object={DTO}
          setObject={setDTO}
          sx={{width: "300px"}}
          />


          <ComboSelector
            object={DTO}
            setObject={setDTO}
            value={DTO.combo}
          />

      {actualReceivers.length !== 0 
      &&<FormControl variant="standard" fullWidth sx={{width: "100%"}}>
        <InputLabel id="demo-simple-select-label">Seleccionar Destinatario</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedReceiver}
          label="Seleccionar Destinatario"
          onChange={handleChange}
        >
          {actualReceivers.map((e, key)=> <MenuItem key={key} value={e.receiverName}>{e.receiverName}</MenuItem>)}
        </Select>
      </FormControl>}
        </div>
  )
}

export default BuyingStep1