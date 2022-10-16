import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import BarInput from '../../common/components/BarInput'
import BarInputMultirow from '../../common/components/BarInputMultirow'
import ComboCarousel from '../../common/components/ComboCarousel'
import { useRouter } from 'next/router'
import grandpaImage from "../public/excited-grandpa.png"
import ArrowRight from "../public/ArrowRight.svg"
import MilyTravel from "../public/MilyTravel.png"

import socialNetworkItems from '../../common/helpers/socialNetwork'
import contactItems from '../../common/helpers/contact'

export default function Home() {
  const [sendEmailObject, setSendEmailObject] = useState({
    name: "",
    email: "",
    emailBody: "",
  })
  const Router = useRouter()

  return (
    <div>
      <Head>
        <title>Mily Travel</title>
        <meta name="description" content="Mily Travel es un servicio para remesas y Combos alimenticios hacia Cuba con garatía de entrega." />
        <link rel='canonical' href='http://www.milytravel.com'/>
        <link rel='canonical' href='http://milytravel.com'/>
        <link rel="icon" href="/MilyTravel.png" />
      </Head>

      <main className="main height-67 flex justify-center align-end flex-column">
        <div className='width-40 height-67 font-color-w bg-black flex justify-center align-start flex-column'>
          <div style={{padding: "0 50px"}} >
            <h3>Ayuda a tus seres queridos ahora mismo</h3>
            <p>Enviales una pequeña remesa o uno de nuestros suplicios alimenticios.</p>
            <button 
            onClick={()=>Router.push("/shop/sendingMoney")}
            className='hero-section-button bg-red font-color-w text-center flex justify-center align-center'>
              Enviar Remesa 
              <img 
                style={{width: "15px",marginLeft: "10px"}}
                src={ArrowRight.src} alt=">"
              />
            </button>
          </div>
        </div>
      </main>

      <section className='HomeMiddleSection' style={{margin: "70px 0"}}>
        <div className='flex flex-column justify-center align-center text-center'>
          <h3>Seleccione el combo correcto</h3>
          <p>Ayuda a tus seres queridos ahora mismo</p>
          <ComboCarousel/>
          <Link
            style={{margin: "25px 0"}}
            href={"shop/seeCombos"}
            >
            <div style={{margin: "15px"}} className='hero-section-button bg-red font-color-w text-center flex justify-center align-center'>
              Ver Todos
            </div>
          </Link>
        </div>
      </section>

      <footer className='home-page-footer' >
        <div
          style={{
            borderRadius: "7px",
          }}
          className='contact-container flex justify-space-evenly align-center box-shadow-basic relative'>
          <section style={{width: "40%"}} className='flex flex-column'>
            <div>
              <h3>Estamos a tú disposición</h3>
              <p>¿Cómo podemos ayudarte?</p>
            </div>
              <BarInput
                name={"name"}
                label={"Nombre"}
                value={sendEmailObject.name}
                object={sendEmailObject}
                setObject={setSendEmailObject}
              />
              <BarInput
                name={"email"}
                label={"Email"}
                value={sendEmailObject.email}
                object={sendEmailObject}
                setObject={setSendEmailObject}
              />
              <BarInputMultirow
                name={"emailBody"}
                row={"4"}
                label={"Mensaje"}
                value={sendEmailObject.emailBody}
                object={sendEmailObject}
                setObject={setSendEmailObject}
              />
              <button
                style={{marginTop: "20px"}}
                className='hero-section-button bg-red font-color-w text-center flex justify-center align-center'
              >
                Enviar
              </button>
          </section>
          <hr style={{height: "250px"}} className="absolute"/>
          <section style={{width: "37%"}} className='flex flex-column justify-center align-center'>
            <div className='flex flex-column'>
            {contactItems.map((WayToContact, key)=>(
              <a style={{marginBottom: "20px"}} className='flex align-center' target="_blank" key={key} href={WayToContact.href}>

                <img
                  style={{height: WayToContact.height, marginRight: "15px"}} 
                  src={WayToContact.iconRef.src}/>

                <span>{WayToContact.text}</span>
              </a>
            ))}
            </div>
            <div className='width-full flex justify-space-around align-center'>
            {socialNetworkItems.map((socialNetwork, key)=> (
              <a target="_blank" key={key} href={socialNetwork.href}>
                <img style={{height: socialNetwork.height}} src={socialNetwork.iconRef.src}/>
              </a>
            ))}
            </div>
          </section>
          <img className='logoFromContact absolute' src={MilyTravel.src} alt=""/>
        </div>
      </footer>
    </div>
  )
}
