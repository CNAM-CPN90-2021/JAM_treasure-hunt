import './style.css';
import img from '../components/map.png';
import { IonButton } from '@ionic/react';

const Geoloc = () => {
  return (
    <div className="container">
      <p>Votre destination</p>
      <img className="cadre" src={img} alt="" />
      <div className="text">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
        <br />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      </div>
        <IonButton className="button-scenario" href="text">Précédent</IonButton>
        <IonButton className="button-scenario" href="qr">Suivant</IonButton>
    </div>

  );
};

export default Geoloc;
