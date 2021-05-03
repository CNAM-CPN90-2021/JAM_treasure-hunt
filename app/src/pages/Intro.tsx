import './style.css';
import HackerImage from './hacker.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Intro: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
        <img src={HackerImage}/>
        <div className="intro-text">
            <p>Une société est arrivée à injecter du code javascript dans de l'adn. La transmssion se fait par voie auditive.</p>
            <p>Dés l'exécution du code, tous les contaminés trépassent</p>
            <p>C'est à vous de trouver un moyen de déjouer ce code javascript !</p>
      </div>
      <IonButton className="button-scenario" href="home">Précédent</IonButton>
      <IonButton className="button-scenario" href="text">Suivant</IonButton>
    </div>
  );
};

export default Intro;
