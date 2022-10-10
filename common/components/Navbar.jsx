import MilyTravel from "../../public/MilyTravel.png"
import Link from "next/Link"
import Avatar from "@mui/material"

function Navbar({children}) {

  return (
    <>
      <navbar style={{height: "80px"}} className="flex justify-space-between align-center">
          <img style={{width: "70px", marginLeft: "10px"}} src={MilyTravel.src} alt='MilyTravel'/>
          <div className="align-center navbarLinks flex justify-center">
            <Link href={"/auth/login"}>Iniciar Sesión</Link>
            <Link href={"/auth/register"}>Suscribirse</Link>
          </div>
      </navbar>
      {children}
    </>
  )
}

export default Navbar