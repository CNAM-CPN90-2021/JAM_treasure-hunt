import React, { useState, useEffect } from 'react';
import './style.css';
import { IonButton } from '@ionic/react';
import { resultingClientExists } from 'workbox-core/_private';

interface ContainerProps { }

const ChooseScenario: React.FC<ContainerProps> = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scenarios, setScenarios] = useState(
     [ 
        {
          titre: ""
        }
     ]
  );


  useEffect(() => {
    fetch("/scenarioListJson")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setScenarios(result);
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
        <strong className="title-scenario">Please choose Scenario</strong>
        {scenarios.map((scenario)=>
          <IonButton className="button-scenario" href="intro">{scenario.titre}</IonButton>
        )}
        
      </div>
    );
  };
}


export default ChooseScenario;
