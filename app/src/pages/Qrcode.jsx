import './Qrcode.css';
import img from '../components/qrcode.png';
import { IonButton } from '@ionic/react';

const Qrcode = () => {
  return (
    <div className="container">
      <p>Scanner</p>
      <img className="cadre" src={img} alt="" />
      <div className="text">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      </div>
      <footer>
        <IonButton>Précédent</IonButton>
      </footer>
    </div>

  );
};

export default Qrcode;
