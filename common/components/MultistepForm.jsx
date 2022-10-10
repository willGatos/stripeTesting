import React,{useState} from 'react'

function MultiStepForm() {
    const [step, setStep] = useState(0)
    const formSteps = ()=>{
        switch(actualStep){
          case 0:
            return (<div>Step1</div>);
          case 1:
            return (<div>Step2</div>);
          
          case 2: 
          return <div>3</div>
        case 3:
          return <div>4</div>
        default:
          return
      }
    }
  
  return (
    <div>
        {formSteps()}
    </div>
  )
}

export default MultiStepForm