import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChooseScenario from './ChooseScenario';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treasure Hunt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton href="geo"> Geoloc </IonButton> 
        <ChooseScenario />
      </IonContent>
    </IonPage>
  );
};

export default Home;
