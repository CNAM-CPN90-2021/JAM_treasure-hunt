import './style.css';
import EnigmaImage from './enigma.png';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const Text: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
        <img src={EnigmaImage} className="EnigmaImage"/>
        <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </div>
      <IonButton className="button-scenario" href="intro">Précédent</IonButton>
      <IonButton className="button-scenario" href="geo">Suivant</IonButton>
    </div>
  );
};

export default Text;
