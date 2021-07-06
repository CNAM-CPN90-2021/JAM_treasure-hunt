import './style.css';
import { IonButton } from '@ionic/react';

const checkNumber = () => {
    return (
        <div className="container">
            <div className="checkNumber">
                <div className="checkNumText">
                    <p>Un code est caché dans le texte précédent, à  quoi pourrait il correspondre ?</p>
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

                <IonButton className="button-scenario" href="geo">Validé</IonButton>
                <div className="progress-buttons">
                    <IonButton color="warning" className="button-scenario" href="text">Précédent</IonButton>
                </div>
            </div>
        </div>
    );
};

export default checkNumber;