import {useState} from 'react'
import MultiStepForm from "../../common/components/MultiStepForm"
import BuyingStep1 from './components/BuyingStep1'

function BuyingCombos() {
  const [buyingCombos, setBuyingCombos] = useState({
    //DEL CLIENTE
    clientName: "",
    email: "",
    combo: "",
    creditCard: "",
    //DEL DESTINATARIO
    receiverName: "",
    carnet: "",
    province: "",
    township: "",
    city: "",
    address: "",
    phone: "",
  })
  return (
    <div className='shopContainer flex flex-column justify-center align-center'>
      <MultiStepForm
        DTO={buyingCombos}
        setDTO={buyingCombos}
        >
          <BuyingStep1 DTO={buyingCombos} setDTO={setBuyingCombos}/>
      </MultiStepForm>
      
    </div>
  )
}

export default BuyingCombos