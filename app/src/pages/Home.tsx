import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ChooseScenario from './ChooseScenario';


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Treasure Hunt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ChooseScenario />
      </IonContent>
    </IonPage>
  );
};

export default Home;
