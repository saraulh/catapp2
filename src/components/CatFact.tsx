import React, { useEffect, useState } from 'react';
//import RandomCatImage from './RandomCatImage';
import './CatFact.css'

// array av strenger 
interface CatFactResponse {
  data: string[]; 
}

const CatFact = () => {

  const [catFact, setCatFact] = useState<string | null>(null); //Usestate - Holder på kattefaktaen og viser den 

  const fetchCatFact = async () => {  //fetch funksjon til å gjøre kall på api-et
      const response = await fetch('https://meowfacts.herokuapp.com');
      const result: CatFactResponse = await response.json(); //riktig type definert i CatFactResponse
      setCatFact(result.data[0]);
  };

  useEffect(() => { //henting og rendering 
    fetchCatFact(); 
  }, []);

  return (
    <div className="cat-fact-container">
      <h2>Random Cat Fact🐈:</h2>
      {catFact ? ( //viser kattefaktaen eller loading
        <p className="cat-fact">{catFact}</p>
      ) : (
        <p>Loading cat fact...</p> //viser ikke kattefakta med en gang pga null som initialverdi
      )}
      <button onClick={fetchCatFact}>Get New Cat Fact</button> 
      
    </div> //bruker fetchCatFact funksjonen til å hente ny kattefatka 
  );
};

export default CatFact;
