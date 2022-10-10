import {useState} from 'react'
import MultiStepForm from "../../common/components/MultiStepForm"
import Step1 from './components/Step1'

function sendingMoney() {
  const [sendingMoney, setSendingMoney] = useState({
    //DEL CLIENTE
    email: "",
    amount: "",
    paymentType: "",
    creditCard: "",
    //DEL DESTINATARIO
    name: "",
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
        route={"http://localhost:3001/buys/sendMoney"}
        DTO={sendingMoney}
        setDTO={setSendingMoney}
        >
          <Step1 DTO={sendingMoney} setDTO={setSendingMoney}/>
      </MultiStepForm>
    </div>
  )
}

export default sendingMoney