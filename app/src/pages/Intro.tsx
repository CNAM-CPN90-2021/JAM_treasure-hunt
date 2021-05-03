import './ChooseScenario.css';
import HackerImage from './hacker.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Intro: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
        <img src={HackerImage}/>
        <div className="intro-text">
            <p>Une société est arrivée à injecter du code javascript dans le l'adn. La transmssion se fait par voie orale.</p>
            <p>Et à l'exécution du code, tous les contamins trépassent</p>
            <p>C'est à vous de trouver un moyen de déjouer ce code javascript !</p>
      </div>
      <IonButton className="button-scenario" href="home">Etape Precedante</IonButton>
      <IonButton className="button-scenario" href="text">Etape Suivante</IonButton>
    </div>
  );
};

export default Intro;
