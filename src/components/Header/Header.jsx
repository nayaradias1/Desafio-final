import React from 'react'
import nayara from "../../assets/imagens/nayara.png"
import "./Header.css"

export default function Header() {
  return (
  <header>
    <img className='Nayara' src={nayara} alt="" />
    <div className='comeco'>
      
      <h1>Nayara Dias</h1>
      <h2>28 Anos</h2>
      <h4>Desenvolvedora Web</h4>
      <hr />
    </div>
  </header>
  )
}
