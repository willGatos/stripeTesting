import React from 'react'
import combos from '../common/helpers/combosRelationship'
import Image from 'next/image'
function App() {
    const getToWork= ()=>{
        fetch("http://localhost:3000/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1 },
      ],
    }),
  }) .then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
  })
  .then(({ url }) => {
    window.location = url
  })
  .catch(e => {
    console.error(e.error)
  })
    }
  return (
    <div style={{
        display: "flex",
justifyContent: "center",
flexDirection: "column",
width: "300px",
margin: "auto",
alignItems: "center",
alignContent: "center",
    }}>
        <Image 
            width={"200px"}
            height={"300px"}
            src={combos[0].image.src}
            alt={combos[0].name}
        />
        <button 
        style={{width: "200px",
            background: "#f24853",
            color: "white",
            borderRadius: "15px",}}
        onClick={()=>getToWork()}>Me interesa</button>
    </div>
  )
}

export default App