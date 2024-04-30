import React from 'react'
import './Main.css'
import cao from "../../assets/imagens/cao.png"
import nabatida from "../../assets/imagens/nabatida.png"
import selfcare from "../../assets/imagens/selfcare.png"

export default function Main() {
  return (
   <>
   <main>

   
   <div>
    <h5>🚀 Desenvolvedora extremamente Apaixonada por Inovação e Soluções Tecnológicas<br/><br/>
Sou uma profissional apaixonada por transformar ideias inovadoras em soluções tecnológicas concretas. Com uma sólida experiência em desenvolvimento de software e um olhar atento às últimas tendências tecnológicas, estou sempre em busca de desafios que me permitam aprimorar minhas habilidades e contribuir para projetos que fazem a diferença. Estou cursando Engenharia de software pela universidade metropolitana de franca sp a ser concluida em dezembro de 2023.<br/><br/>
#DesenvolvimentoDeSoftware #InovaçãoTecnológica #TransformaçãoDigital #TrabalhoEmEquipe</h5><br/><br/>
   </div>
   <div className='Links'>
    <h3>Conheça Meus trabalhos</h3><br/>
      <a href=""><i class="fas fa-github"></i>Github</a><br/>
      <a href=""><i class="fa fa-linkedin" aria-hidden="true">Linkedin</i></a>
    </div>
    <div className='imagens'>
      
      <img src={cao} alt="" />
      <img src={nabatida} alt="" />
      <img src={selfcare} alt="" />

    </div>
    </main>
   </>
    
  )
}


