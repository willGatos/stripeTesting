import Link from 'next/Link'

function Success() {
  return (
    <div style={{  height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}>
        <p style={{borderRight: "1px solid",padding: "15px"}}>Transacción Exitosa</p>
        <Link 
        style={{margin: "15px"}}
        href={"/"}>Página Principal</Link>
    </div>
  )
}

export default Success