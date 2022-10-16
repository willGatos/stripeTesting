import axios from "axios";

function Buttons({route, DTO, actualStep, setActualStep}) {
  const onSubmit = () =>{
    console.log(DTO, route)
    axios.post(route, DTO)
      .then((e)=>{console.log(e)})
      .catch((e)=>{console.log(e)})
  }
  return (
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
                type="submit"
                style={{width: "100px", marginTop: "50px", marginLeft: "10px"}}
                className='hero-section-button bg-red font-color-w text-center flex justify-center align-center' 
                onClick={()=> setActualStep(actualStep+1)}
            >
            Siguiente
            </button>
          : <button 
              type="submit"
              style={{width: "100px", marginTop: "50px", marginLeft: "10px"}}
              className='hero-section-button bg-red font-color-w text-center flex justify-center align-center'
              onClick={()=> onSubmit()}
            >
            Enviar
          </button>}
    </div>
  )
}

export default Buttons