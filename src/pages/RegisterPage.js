import React from 'react';
/* import 'src/App.css'; */
/*import { Link } from 'react-router-dom' */


export default function SignUpPage() {
    return (
        <div className="register">
            <div className="convite">
                <h2>Junte-se a nós</h2>
                <h5>Crie sua conta e anuncie conosco</h5>
            </div>
            
            <form>

                <p>
                    <label>Nome de usuário <input class = "register_input" type="text" name="first_name" required /></label>
                   
                </p>
                <p>
                    <label>Email<input class = "register_input" type="email" name="email" required /></label>
                    
                </p>
                <p>
                    <label>Senha<input  class = "register_input" type="password" name="password" requiredc /></label>
                    
                </p>
                <p>
                    <label>CPF<input class = "register_input" type="password" name="password" requiredc /></label>
                   
                </p>
                <p style={{display: "inline-block"}}>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>Concordo com todos os termos e serviços</span>
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Registrar-se</button>
                </p> 
            </form>
            </div>
        
    )
}

