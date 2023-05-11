import { useState } from 'react';
import "./contato.css"
import emailjs from '@emailjs/browser';
const Contato = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();

        if(name === "" || email === "" || ""){
          alert("Prencha todos campos")
          return;
        }

        const templateParams = {
          from_name: name, 
          message: message,
          email: email
        }
        
        emailjs.send("service_n32qtuy", "template_w9fw955", templateParams, "2MlfHqJWVj2ASkdZJ").then((response) =>{
            console.log("Enviado", response.status, response.text);
            setName('');
            setEmail('');
            setMessage('');
        }, (err) => {
            console.log("Erro",  err)
        })
    }

    return (
        <div className="container">
          <h1 className="title">Contato</h1>
    
          <form className="form" onSubmit={sendEmail}>
            <input 
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            
            <input 
              className="input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
    
            <textarea 
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
    
            <input className="button" type="submit" value="Enviar" />
          </form>
    
        </div>
      );
    }



export default Contato;