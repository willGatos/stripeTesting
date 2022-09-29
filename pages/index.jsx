import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../common/components/Navbar'
import socialNetworkItems from '../common/helpers/socialNetwork'
import contactItems from '../common/helpers/contact'
export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Mily Travel</title>
        <meta name="description" content="Mily Travel es un servicio para remesas y Combos alimenticios hacia Cuba con garatía de entrega." />
        <link rel='canonical' href='http://www.milytravel.com'/>
        <link rel='canonical' href='http://milytravel.com'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Navbar/>
      <main className={styles.main}>
        <div>
          <h3>Ayuda a tus seres queridos ahora mismo</h3>
          <p>Enviales una pequeña remesa o uno de nuestros suplicios alimenticios.</p>
          <button>Enviar Remesa</button>
        </div>
      </main>

      <section>
        <div>
          <h3>Seleccione el combo correcto</h3>
          <p>Ayuda a tus seres queridos ahora mismo</p>
          <img alt='Combo Alimenticio'/>
          <button>Ver Todos</button>
        </div>
      </section>

      <section>
        
      </section>

      <footer className={styles.footer}>
        <div>
          <section>
              <h3>Estamos a tú disposición</h3>
              <p>¿Cómo podemos ayudarte?</p>
              <input/>
              <input/>
              <input/>
              <button>Enviar</button>
          </section>
          <hr/>
          <section>
            <div>
            {contactItems.map((WayToContact, key)=>(
              <a target="_blank" key={key} href={WayToContact.href}>
                <img src={WayToContact.iconRef.src}/>
                <span>{WayToContact.text}</span>
              </a>
            ))}
            </div>
            <div>
            {socialNetworkItems.map((socialNetwork, key)=> (
              <a target="_blank" key={key} href={socialNetwork.href}>
                <img src={socialNetwork.iconRef.src}/>
              </a>
            ))}
            </div>
          </section>
        </div>
      </footer>
    </div>
  )
}
