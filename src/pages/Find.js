import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';

function Find() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    fetchAdvertisements();
  }, []);

  const fetchAdvertisements = async () => {
    try {
      const response = await fetch('http://localhost:8080/advertisements');
      const data = await response.json();
      setAdvertisements(data);
    } catch (error) {
      console.error('Erro ao buscar anúncios:', error);
    }
  };

  return (
    <div className="App">
      <div className="col">
        {advertisements.map(advertisement => (
          <Card
            key={advertisement.id}
            imgSrc="https://picsum.photos/id/193/300/200"
            imgAlt={`Imagem do anúncio ${advertisement.id}`}
            title={`Casa ${advertisement.id}`}
            description={advertisement.description}
            buttonText="Learn More"
            link={`advertisement/${advertisement.id}`} // Rota para detalhes do anúncio, se necessário
            price={`Valor: R$ ${advertisement.value}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Find;
