import React from 'react'
import nayara from "../../assets/imagens/nayara.png"
import "./Header.css"

export default function Header() {
  return (
  <header>
    <img src={nayara} alt="" />
    <div className='começo'>
      
      <h1>Nayara Dias</h1>
      <h2>28 Anos</h2>
    </div>
  </header>
  )
}
