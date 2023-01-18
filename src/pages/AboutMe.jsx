import "../styles/AboutMe.scss"
import Foto from "../assets/img/Perfil.jpg"
import Cv from "../components/Cv"

function AboutMe() {
  return (
    <div className="card-container">
		<span className="cv"><Cv/></span>
		<img className="round" src={Foto} alt="mi foto" />
		<h3>Andres Vallecilla</h3>
		<h6>Colombia</h6>
		<p>Desarrollador Web y<br/>estudiante de ing en sistemas</p>

		<div className="skills">
			<h6>Skills</h6>
			<ul>
				<li>Front End Development</li>
				<li>HTML</li>
				<li>CSS</li>
				<li>Bootstrap</li>
				<li>JavaScript</li>
				<li>React</li>
				<li>Node</li>
				<li>Python</li>
				<li>Git hub</li>
				<li>Firebase</li>
				<li>Api</li>
			</ul>
			
			<h6>Future skills and skills in progress</h6>
			<ul>
				<li>Java</li>
				<li>UI / UX</li>
				<li>Ciberseguridad</li>
			</ul>
		</div>
	</div>
  )
}

export default AboutMe