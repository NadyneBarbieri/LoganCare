import React, { useState } from "react";
import emailjs from '@emailjs/browser'
import './Formulario.css'

const Formulario = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

function sendEmail(e){
    e.preventDefault();
    if(name === '' || email === '' || message === '' ){
        alert("Todos os campos são obrigatorios")
        return;
    }
    
const templateParams = {
    from_name: name,
    message:message,
    email:email
}
  emailjs.send('service_ky3wnn3', 'template_5vobomb', templateParams, "gVyStjmsKHlruEUWk" ).then((response)=>{
    console.log("Email enviado", response.status, response.text)
    setEmail('')
    setMessage('')
    setName('')
  }, (err)=>{
    console.log("Erro", err)
  })
}
return (
    <div className="Container-form">
      <div className="Container">
        <h1 className="Title">Sac</h1>
        <form action="form" onSubmit={sendEmail}>
        <p>Nome:</p>
        <input
        className="form"
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        value={name}
        />
        <p>Email:</p>
        <input
        className="form"
        type="text"
        placeholder="Digite seu email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <p>Menssagem:</p>

        <textarea
        className="form message"
        type="text"
        placeholder="Digite sua menssagem"
        onChange={(e)=>setMessage(e.target.value)}
        value={message}
        />
       <input className="button" type="submit" value="Enviar"/>
    </form>
    </div>
    </div>
);
};

export default Formulario;
