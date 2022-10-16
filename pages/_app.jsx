import '../styles/globals.css'
import { useState } from 'react'
import Navbar from '../common/components/Navbar'
import UserContext from '../common/helpers/userContext'

function MyApp({ Component, pageProps }) {
  const [clientData, setClientData] = useState({})

  return (
  <UserContext.Provider value={{clientData, setClientData}}>
    {/* <Navbar>*/}  
      <Component {...pageProps} />
    {/*</Navbar>*/}
  </UserContext.Provider>)
}

export default MyApp
