import './ChooseScenario.css';
import { IonButton } from '@ionic/react';


interface ContainerProps { }

const ChooseScenario: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong className="title-scenario">Please choose Scenario</strong>
          <IonButton className="button-scenario" href="intro"> Scenario 1</IonButton>
          <IonButton className="button-scenario" href="/intro">Scenario 2</IonButton>
          <IonButton className="button-scenario" href="/intro">Scenario 3</IonButton>
    </div>
  );
};

export default ChooseScenario;
