import "../styles/Contacto.scss"
import Redes from "../components/Redes"
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Contacto() {
	const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0y5fywh', 'template_qupspea', form.current, 'GQSYWCAZuF69eoLnl')
      .then((result) => {
          alert(`${result.text}  Su mensaje a sido enviado con exito, me comunicare con ustedes lo mas pronto posible`);
      }, (error) => {
		  alert(`Ha ocurrido un error de tipo ${error.text} Andres94-web estara trabajando para solucionarlo`);
      });
  };
  return (
    <section id="contact">
		
	    <div className="sectionheader"><Redes/></div>
	    <article>
		
			<label htmlFor="checkcontact" className="contactbutton">
				<div className="mail"></div>
			</label>
			<input id="checkcontact" type="checkbox"/>
	
			<form action="" method="post" className="contactform" ref={form} onSubmit={sendEmail}>
				<p className="input_wrapper">
					<input type="text" name="user_name" /* value=""  */ id ="user_name" required/>
					<label htmlFor="contact_nom">Nombre</label>
				</p>

				<p className="input_wrapper">
					<input type="email" name="user_email" /* value="" */  id ="user_email" required/>
					<label htmlFor="contact_email">Email</label>
				</p>

				<p className="textarea_wrapper">
					<textarea name="message" id="contact_message" required></textarea>
				</p>

				<p className="submit_wrapper">
					<input type="submit" value="Send"/>
				</p>		

			</form>
			
	    </article>
    </section>
  )
}

export default Contacto