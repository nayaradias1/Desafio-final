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
    <h5>🚀 Desenvolvedora extremamente Apaixonada por Inovação e Soluções Tecnológicas<br/><br/></h5>
    <h4>Sou uma profissional apaixonada por transformar ideias inovadoras em soluções tecnológicas concretas. Com uma sólida experiência em desenvolvimento de software e um olhar atento às últimas tendências tecnológicas, estou sempre em busca de desafios que me permitam aprimorar minhas habilidades e contribuir para projetos que fazem a diferença. Estou cursando Engenharia de software pela universidade metropolitana de franca sp a ser concluida em dezembro de 2023.<br/><br/>
#DesenvolvimentoDeSoftware #InovaçãoTecnológica #TransformaçãoDigital #TrabalhoEmEquipe</h4><br/><br/>
<div className='tecnologias'>
<img className='icone' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="" />
<img className='icone' src="https://miro.medium.com/v2/resize:fit:365/1*f9t1eeISadHhjK5QYejJBg.png" alt="" />
<img className='icone' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
<img className='icone' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
<img className='icone' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png" alt="" />
<img className='icone' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="" />
<img className='icone' src="https://hermes.dio.me/articles/cover/7b89fda2-4af3-4ae0-98bc-ad2b65854909.png" alt="" />
</div>
   </div>
   <div className='Links'>
    <h3>Conheça Meus trabalhos</h3><br/>
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


