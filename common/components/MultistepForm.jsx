import React,{useState, useEffect} from 'react'
import Step1 from '../../pages/shop/components/Step1';
import Step2 from '../../pages/shop/components/Step2';
import Step3 from '../../pages/shop/components/Step3';
import axios from "axios";

function MultiStepForm({DTO, setDTO, route, children}) {
    const [actualStep, setActualStep] = useState(0)
    const formSteps = ()=>{
        switch(actualStep){
          case 0:
            return (children);
          case 1:
            return (<Step2 DTO={DTO} setDTO={setDTO}/>);
          case 2: 
            return (<Step3 DTO={DTO} setDTO={setDTO}/>)
          default:
            return (
            <div>
              <p>Error en los Pasos a seguir</p>
            </div>)
      }
    }
    const onSubmit = () =>{
      axios.post(route, DTO)
      .then(()=>{})
      .catch(()=>{})
    }
      

  return (
    <div className='shopFormContainer flex flex-column justify-center align-center'>
        {formSteps()}
        <div className='flex'>
          <button 
          style={{width: "100px", marginTop: "50px"}}
          className='hero-section-button bg-blue font-color-w text-center flex justify-center align-center'
          onClick={()=> setActualStep(actualStep-1)}
          >
            Anterior
          </button>

          {actualStep !== 2 
          ? <button
          style={{width: "100px", marginTop: "50px", marginLeft: "10px"}}
          className='hero-section-button bg-red font-color-w text-center flex justify-center align-center' 
          onClick={()=> setActualStep(actualStep+1)}
          >
            Siguiente
          </button>
          : <button 
          style={{width: "100px", marginTop: "50px", marginLeft: "10px"}}
          className='hero-section-button bg-red font-color-w text-center flex justify-center align-center'
          onClick={()=> onSubmit()}
          >
            Enviar
          </button>}
        </div>
    </div>
  )
}

export default MultiStepForm