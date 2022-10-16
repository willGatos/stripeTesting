import React,{useState} from 'react'
import Step1 from '../../pages/shop/components/Step1';
import Step2 from '../../pages/shop/components/Step2';
import Step3 from '../../pages/shop/components/Step3';
import Buttons from '../../pages/shop/components/Buttons';

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

  return (
    <div className='shopFormContainer flex flex-column justify-center align-center'>
        {formSteps()}
        <Buttons 
          DTO={DTO}
          route={route} 
          actualStep={actualStep}
          setActualStep={setActualStep}/>
    </div>
  )
}

export default MultiStepForm