import React, { useState } from 'react';
import axios from 'axios';

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cpf: '',
        telephones: [{ number: '', mainNumber: true }] // Supondo que há pelo menos um telefone
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleTelephoneChange = (index, e) => {
        const { name, value } = e.target;
        const newTelephones = formData.telephones.map((tel, i) => {
            if (i === index) {
                return { ...tel, [name]: value };
            }
            return tel;
        });
        setFormData({ ...formData, telephones: newTelephones });
    };

    const addTelephoneField = () => {
        setFormData({
            ...formData,
            telephones: [...formData.telephones, { number: '', mainNumber: false }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/costumers/individual', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                cpf: formData.cpf,
                telephones: formData.telephones
            });
            console.log('Cliente criado:', response.data);
            alert('Registro bem-sucedido!'); // Adicionado o alert
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            alert(`Erro ao registrar. Por favor, tente novamente. Erro: ${error.message}`);
        }
    };

    return (
        <div className="register">
            <div className="convite">
                <h2>Junte-se a nós</h2>
                <h5>Crie sua conta e anuncie conosco</h5>
            </div>
            
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Nome de usuário 
                        <input 
                            className="register_input" 
                            type="text" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </p>
                <p>
                    <label>Email
                        <input 
                            className="register_input" 
                            type="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </p>
                <p>
                    <label>Senha
                        <input 
                            className="register_input" 
                            type="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </p>
                <p>
                    <label>CPF
                        <input 
                            className="register_input" 
                            type="text" 
                            name="cpf" 
                            value={formData.cpf} 
                            onChange={handleChange} 
                            required 
                        />
                    </label>
                </p>
                {formData.telephones.map((telephone, index) => (
                    <p key={index}>
                        <label>Telefone
                            <input
                                className="register_input"
                                type="text"
                                name="number"
                                value={telephone.number}
                                onChange={(e) => handleTelephoneChange(index, e)}
                                required
                            />
                        </label>
                    </p>
                ))}
                <p>
                    <button type="button" onClick={addTelephoneField}>
                        Adicionar Telefone
                    </button>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Registrar-se</button>
                </p>
            </form>
        </div>
    );
}
