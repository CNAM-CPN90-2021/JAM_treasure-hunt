import './Fin.css';
import img from '../components/qrcode.png';
import { IonButton } from '@ionic/react';

const Fin = () => {
  return (
    <div className="container">
      <p>Fin</p>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <footer>
        <IonButton>Précédent</IonButton>
      </footer>
    </div>

  );
};

export default Fin;
