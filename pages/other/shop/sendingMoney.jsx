import {useState, useEffect, useContext} from 'react'
import MultiStepForm from "../../common/components/MultiStepForm"
import Step1 from './components/Step1'
import Head from "next/head"
import axios from "axios"
import UserContext from '../../common/helpers/userContext'

function sendingMoney() {
  const [sendingMoney, setSendingMoney] = useState({
    //DEL CLIENTE
    clientName: "",
    email: "",
    amount: "",
    paymentType: "",
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

  const [selectedReceiver, setSelectedReceiver] = useState("")
  const [actualReceivers, setActualReceivers] = useState([])
  const { clientData } = useContext(UserContext)

  useEffect(()=>{
    const accessToken = localStorage.getItem("accessToken")
    setSendingMoney( () => {
      return {
        ...sendingMoney,
        email: clientData.email,
        clientName: clientData.clientName,
      }
    })
    if( accessToken )
    axios.post("http://localhost:3001/buys/getReceivers",clientData,
    {headers: {'Authorization': 'Bearer '+ accessToken}})
    .then(e => {
      const receiversData = e.data;
      setActualReceivers(receiversData)
    })
    .catch(e=> console.log(e))
  },[])

  return (
    <>
      <Head>
        <script src="https://checkout.sandbox.dev.clover.com/sdk.js"></script>
      </Head>
      <div className='shopContainer flex flex-column justify-center align-center'>
        <MultiStepForm
          route={"http://localhost:3001/buys/sendMoney"}
          DTO={sendingMoney}
          setDTO={setSendingMoney}
          >
            <Step1 
              actualReceivers={actualReceivers}
              DTO={sendingMoney}
              setDTO={setSendingMoney}
              selectedReceiver={selectedReceiver}
              setSelectedReceiver={setSelectedReceiver}
            />
        </MultiStepForm>
      </div>
    </>
  )
}

export default sendingMoney;