import React, { useState } from 'react';
import { Card } from '../components/Card';
import { SearchBar } from '../components/SearchBar';
import { SearchResultsList } from '../components/SearchResultsList';

function Find() {
  const [results, setResults] = useState([]);

  return (
  <div className="App">

    <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
    
    
    </div>

    <div className="col">
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
        />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
    </div>
    <div className="col">
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
        />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
    </div>
    <div className="col">
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
        />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
    </div>
    <div className="col">
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
        />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
      <Card
        imgSrc="https://picsum.photos/id/193/300/200"
        imgAlt="Card Image 3"
        title="Card Title"
        description="This is the card description section. You can add more details about the product here"
        buttonText="Learn More"
        link="card2"
        price="100.000"
      />
    </div>
    
  </div>
  );
}

export default Find;
