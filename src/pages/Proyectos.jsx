import "../styles/Certificados.scss"
import instagram from "../assets/img/instagram.png"
import disney from "../assets/img/disney.png"
import pokedex from "../assets/img/pokedex.png"
import crud from "../assets/img/Crud.png"
import trivia from "../assets/img/otraTrivia.png"
import triviaSonido from "../assets/img/trivia.png"

function Proyectos() {
  return (
    <>
      <div className="grid image-grid">

        <div className="grid-block">
         <div className="tile">
            <a className="tile-link" href="https://cool-sunflower-51cbe7.netlify.app/" target="_blank" rel="noreferrer">
             <img className="tile-img tile-img1" src={instagram} alt="certificado de academlo"/>
           </a>
         </div>
         <span className="title">Clon de instagram</span>
        </div>

        <div className="grid-block">
         <div className="tile">
            <a className="tile-link" href="https://chimerical-fenglisu-0caf72.netlify.app/" target="_blank" rel="noreferrer">
           <img className="tile-img tile-img1" src={disney} alt="certificado de platzi"/>
            </a>
         </div>
         <span className="title">Clon de disney</span>
        </div>

        <div className="grid-block">
          <div className="tile">
           <a className="tile-link" href="https://cozy-elf-d274dc.netlify.app/" target="_blank" rel="noreferrer">
           <img className="tile-img tile-img1" src={pokedex} alt="certificado de platzi"/>
           </a>
         </div>
         <span className="title">Pokedex</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="https://silver-frangollo-a2122a.netlify.app/" target="_blank" rel="noreferrer">
           <img className="tile-img tile-img1" src={crud} alt="certificado de platzi"/>
            </a>
          </div>
          <span className="title">Crud</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="https://brilliant-kataifi-508da7.netlify.app/" target="_blank" rel="noreferrer">
           <img className="tile-img tile-img1" src={trivia} alt="certificado de platzi"/>
            </a>
          </div>
          <span className="title">trivia</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="https://stellar-chebakia-2ac28d.netlify.app/" target="_blank" rel="noreferrer">
           <img className="tile-img tile-img1" src={triviaSonido} alt="certificado de platzi"/>
            </a>
          </div>
          <span className="title">trivia con sonido</span>
        </div>

      </div>
    </>
  )
}

export default Proyectos