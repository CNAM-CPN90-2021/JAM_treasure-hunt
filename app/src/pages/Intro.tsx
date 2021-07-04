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
      <div className="hacker-image">
        <img src={HackerImage}/>
      </div>
        <div className="intro-text">
        <p>{scenario.description}</p>
      </div>
      <div className="progress-buttons">
        <IonButton color="warning" className="button-scenario" href="home">Précédent</IonButton>
        <IonButton color="warning" className="button-scenario" href="text">Suivant</IonButton>
      </div>

    </div>
  );
};
}

export default Intro;
