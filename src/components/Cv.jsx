import "../styles/Cv.scss"

function Cv() {
  return (
    <a className="face-button" href="cv/Mi cv.pdf" download>
      
      <div className="face-primary">
        <span className="icon fa fa-cloud"></span>
        Download Cv
      </div>
  
      <div className="face-secondary">
        <span className="icon fa fa-hdd-o"></span>
        Size: 442 KB
      </div>

    </a>
  )
}

export default Cv