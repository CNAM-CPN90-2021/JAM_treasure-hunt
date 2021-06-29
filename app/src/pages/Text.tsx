import React, { useState, useEffect } from 'react';
import './style.css';
import EnigmaImage from './enigma.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Text: React.FC<ContainerProps> = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scenario, setScenario] = useState(
        {
          titre: "",
          description: ""
        }
  );


  useEffect(() => {
    fetch("/scenarioListJson")
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
        <img src={EnigmaImage} className="EnigmaImage"/>
        <div className="text">
            <p>{scenario.description}</p>
      </div>
      <IonButton className="button-scenario" href="intro">Précédent</IonButton>
      <IonButton className="button-scenario" href="geo">Suivant</IonButton>
    </div>
  );
};
}

export default Text;
