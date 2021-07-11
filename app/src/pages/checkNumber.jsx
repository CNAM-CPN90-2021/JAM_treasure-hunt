import './style.css';
import { IonButton } from '@ionic/react';

// les composants doivent commencer par une majuscule (pour être interprétés comme tel par jsx)
const CheckNumber = () => {
    return (
      <div className="container">
        <div className="checkNumber">
          <div className="checkNumText">
            <p>
              Un code est caché dans le texte précédent, à quoi pourrait il
              correspondre ?
            </p>
          </div>
          <form action="">
            <ol className="listInput">
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
              <li>
                <input type="number" name="" id="" />
              </li>
            </ol>
          </form>

          <IonButton className="button-scenario" routerLink="geo">
            Validé
          </IonButton>
          <div className="progress-buttons">
            <IonButton
              color="warning"
              className="button-scenario"
              routerLink="text"
            >
              Précédent
            </IonButton>
          </div>
        </div>
      </div>
    );
};

export default CheckNumber;