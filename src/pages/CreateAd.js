import React, { useState } from 'react';
import axios from 'axios';

export default function CreateAd() {
    const [formData, setFormData] = useState({
        street: '',
        state: '',
        zipCode: '',
        neighborhood: '',
        city: '',
        rooms: '',
        bathrooms: '',
        privateParkingSpace: '',
        taxes: '',
        fee: '',
        area: '',
        type: ''  // Ensure this matches the enum in backend
    });

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
            const response = await axios.post('http://localhost:8080/properties', formData);
            console.log('Propriedade criada:', response.data);
            alert('Registro bem-sucedido!');
        } catch (error) {
            console.error('Erro ao criar propriedade:', error);
            alert(`Erro ao registrar. Por favor, tente novamente. Erro: ${error.message}`);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <p>
                <label>Rua
                    <input 
                        className="register_input" 
                        type="text" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Estado
                    <input 
                        className="register_input" 
                        type="text" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>CEP
                    <input 
                        className="register_input" 
                        type="text" 
                        name="zipCode" 
                        value={formData.zipCode} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Bairro
                    <input 
                        className="register_input" 
                        type="text" 
                        name="neighborhood" 
                        value={formData.neighborhood} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Cidade
                    <input
                        className="register_input"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </label>
            </p>
            <p>
                <label>Número de quartos
                    <input 
                        className="register_input" 
                        type="number" 
                        name="rooms" 
                        value={formData.rooms} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Número de banheiros
                    <input 
                        className="register_input" 
                        type="number" 
                        name="bathrooms" 
                        value={formData.bathrooms} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Número de vagas na garagem
                    <input 
                        className="register_input" 
                        type="number" 
                        name="privateParkingSpace" 
                        value={formData.privateParkingSpace} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Impostos
                    <input 
                        className="register_input" 
                        type="number" 
                        name="taxes" 
                        value={formData.taxes} 
                        onChange={handleChange} 
                        step="0.01"
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Taxa de condomínio
                    <input 
                        className="register_input" 
                        type="number" 
                        name="fee" 
                        value={formData.fee} 
                        onChange={handleChange} 
                        step="0.01"
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Área útil
                    <input 
                        className="register_input" 
                        type="number" 
                        name="area" 
                        value={formData.area} 
                        onChange={handleChange} 
                        step="0.01"
                        required 
                    />
                </label>
            </p>
            <p>
                <label>Tipo de propriedade
                    <select 
                        className="register_input" 
                        name="type" 
                        value={formData.type} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="">Selecione o tipo</option>
                        <option value="HOUSE">Casa</option>
                        <option value="APARTMENT">Apartamento</option>
                    </select>
                </label>
            </p>
            <p>
                <button id="sub_btn" type="submit">Cadastrar anúncio</button>
            </p>
        </form>
    );
}
