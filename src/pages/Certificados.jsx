
import "../styles/Certificados.scss"
import academlo from "../assets/img/academlo.png"
import platziGit from "../assets/img/platziGit.png"
import platziDesarrolloSoftware from "../assets/img/platziDesarrolloSoftware.png"
import platziPython from "../assets/img/platziPython.png"
import google1 from "../assets/img/google1.png"
import google2 from "../assets/img/google2.png"
import desarrolloWebMisionTic from "../assets/img/desarrollo-web-mision-tic.png"
import ciberseguridad from "../assets/img/ciberseguridad.png"

function Certificados() {
  return (
    <>
      <div className="grid image-grid">

        <div className="grid-block">
         <div className="tile">
            <a className="tile-link" href="misCertificados/Certificado_Alvaro_Andres_Hurtado_Vallencilla.pdf" target="_blank">
             <img className="tile-img tile-img1" src={academlo} alt="certificado de academlo"/>
           </a>
         </div>
         <span className="title">Desarrollador web</span>
        </div>

        <div className="grid-block">
         <div className="tile">
            <a className="tile-link" href="misCertificados/diploma-git-github-appsco.pdf" target="_blank">
           <img className="tile-img tile-img1" src={platziGit} alt="certificado de platzi"/>
            </a>
         </div>
         <span className="title">Git y Github</span>
        </div>

        <div className="grid-block">
          <div className="tile">
           <a className="tile-link" href="misCertificados/diploma-fundamentos-appsco.pdf" target="_blank">
           <img className="tile-img tile-img1" src={platziDesarrolloSoftware} alt="certificado de platzi"/>
           </a>
         </div>
         <span className="title">Desarrollo de software</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="misCertificados/diploma-python.pdf" target="_blank">
           <img className="tile-img tile-img1" src={platziPython} alt="certificado de platzi"/>
            </a>
          </div>
          <span className="title">Python</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="misCertificados/certificado introduccion al desarrollo web 1.pdf" target="_blank">
           <img className="tile-img tile-img1" src={google1} alt="certificado de google"/>
           </a>
         </div>
         <span className="title">Desarrollo de software I</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <span></span>
           <a className="tile-link" href="misCertificados/certificado introduccion al desarrollo web 2.pdf" target="_blank">
            <img className="tile-img tile-img1" src={google2} alt="certificado de google"/>
            </a>
         </div>
         <span className="title">Desarrollo de software II</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="misCertificados/_1116263132-.pdf" target="_blank">
           <img className="tile-img tile-img1" src={desarrolloWebMisionTic} alt="certificado de desarrollo web"/>
           </a>
         </div>
         <span className="title">Desarrollo Web</span>
        </div>

        <div className="grid-block">
         <div className="tile">
           <a className="tile-link" href="misCertificados/ciberseguridad.pdf" target="_blank">
           <img className="tile-img tile-img1" src={ciberseguridad} alt="certificado de ciberseguridad"/>
           </a>
         </div>
         <span className="title">Ciberseguridad</span>
        </div>

      </div>
    </>
  )
}

export default Certificados