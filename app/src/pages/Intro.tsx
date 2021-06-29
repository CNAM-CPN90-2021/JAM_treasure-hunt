import React, { useState, useEffect } from 'react';
import './style.css';
import HackerImage from './hacker.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Intro: React.FC<ContainerProps> = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scenario, setScenario] = useState(
        {
          titre: "",
          description: ""
        }
  );


  useEffect(() => {
    fetch("/scenarioJson/7")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setScenario(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
  return (
    <div className="container">
        <img src={HackerImage}/>
        <div className="intro-text">
        <p>{scenario.description}</p>
      </div>
      <IonButton className="button-scenario" href="home">Précédent</IonButton>
      <IonButton className="button-scenario" href="text">Suivant</IonButton>
    </div>
  );
};
}

export default Intro;
