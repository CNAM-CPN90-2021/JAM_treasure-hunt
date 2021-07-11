import React, { useState, useEffect } from 'react';
import './style.css';
import EnigmaImage from '../ressources/images/enigma.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Text: React.FC<ContainerProps> = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [scenario, setScenario] = useState({
    titre: "Test",
    description: "test",
    etapes: [
      {
        titre: "etape",
        description: "description",
      },
    ],
  });

  // useEffect(() => {
  //   fetch("/scenarioListJson/7")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setScenario(result);
  //         console.log(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     )
  // }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container">
        <img src={EnigmaImage} className="EnigmaImage" />
        <div className="text">
          <p>
            Sur la N47 après 44 km dans mes pensées, le monde m’apparut plus
            claire. Alors que le cours du Dogecoin augmente de 20% tous les 2
            jours et que la superficie des glaciers islandais a reculé de 7% en
            19 ans, j’ai compris que nous faisions fausse route. L’homme ne ce
            rend pas compte de sa chance … Dans 39 ans nous assisterons à une
            crise que nous avons vue venir, sans pour autant réagir. C’est
            pourquoi j’ai décidé que j’allais rebâtir ce monde à 9, grâce à
            cette faille en chacun de nous. Tout sera bientôt prêt, il ne
            restera plus qu’à diffuser la solution au moment le plus opportun
            pour tout redémarrer…
          </p>
        </div>
        <div className="progress-buttons">
          <IonButton color="warning" className="button-scenario" routerLink="intro">
            Précédent
          </IonButton>
          <IonButton
            color="warning"
            className="button-scenario"
            routerLink="checkNumber"
          >
            Suivant
          </IonButton>
        </div>
      </div>
    );
  }
};

export default Text;
