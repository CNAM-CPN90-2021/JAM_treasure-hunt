import './style.css';
import { IonButton } from '@ionic/react';

const Fin = () => {
  return (
    <div className="container">
      <p>Fin </p>
      <iframe
        classname="final-video"
        width="400"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>Tu pensais pouoir nous attrapé ! héhé</p>
      <p>On t'a venu venir petit filou !</p>
      <IonButton className="button-scenario" routerLink="home">
        Accueil
      </IonButton>
    </div>
  );
};

export default Fin;
