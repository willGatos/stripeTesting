import {useState, useEffect, useContext} from 'react'
import Head from "next/head"
import axios from "axios"

import MultiStepForm from "../../common/components/MultiStepForm"
import BuyingStep1 from './components/BuyingStep1'
import UserContext from '../../common/helpers/userContext'

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

  const [selectedReceiver, setSelectedReceiver] = useState("")
  const [actualReceivers, setActualReceivers] = useState([])
  const {clientData} = useContext(UserContext)

  useEffect(()=>{

    const accessToken = localStorage.getItem("accessToken")

    setBuyingCombos( () => {
      return {
        ...buyingCombos,
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
          route={"http://localhost:3001/buys/sendCombo"}
          DTO={buyingCombos}
          setDTO={setBuyingCombos}
        >
            <BuyingStep1
             DTO={buyingCombos}
             setDTO={setBuyingCombos}
             actualReceivers={actualReceivers}
              selectedReceiver={selectedReceiver}
              setSelectedReceiver={setSelectedReceiver}/>
        </MultiStepForm>
      </div>
    </>
  )
}

export default BuyingCombos