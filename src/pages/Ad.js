import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Ad() {
    const [formData, setFormData] = useState({
        costumerId: '',
        propertyId: '',
        value: '',
        description: ''
    });

    const history = useHistory(); // Hook do React Router para controle de navegação

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/advertisements', formData);
            console.log('Anúncio criado:', response.data);
            alert('Registro bem-sucedido!');
            history.push('/pagina-de-destino'); // Redireciona para a página desejada
        } catch (error) {
            console.error('Erro ao criar anúncio:', error);
            alert(`Erro ao registrar. Por favor, tente novamente. Erro: ${error.message}`);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <p>
                <label>ID do Cliente
                    <input 
                        className="register_input" 
                        type="number" 
                        name="costumerId" 
                        value={formData.costumerId} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>ID da Propriedade
                    <input 
                        className="register_input" 
                        type="number" 
                        name="propertyId" 
                        value={formData.propertyId} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Valor
                    <input 
                        className="register_input" 
                        type="number" 
                        name="value" 
                        value={formData.value} 
                        onChange={handleChange} 
                        step="0.01"
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Descrição
                    <textarea 
                        className="register_input" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <button id="sub_btn" type="submit">Cadastrar anúncio</button>
            </p>
        </form>
    );
}
