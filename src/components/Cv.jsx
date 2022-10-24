import "../styles/Cv.scss"

function Cv() {
  return (
    <a className="face-button" href="cv/CV_ALVARO_ANDRES_HURTADO_VALLECILLA.pdf" download>
      
      <div className="face-primary">
        <span className="icon fa fa-cloud"></span>
        Download Cv
      </div>
  
      <div className="face-secondary">
        <span className="icon fa fa-hdd-o"></span>
        Size: 205 KB
      </div>

    </a>
  )
}

export default Cv