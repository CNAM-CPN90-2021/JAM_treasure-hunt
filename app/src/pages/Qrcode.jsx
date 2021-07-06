import "./style.css";
import { IonButton, useIonToast } from "@ionic/react";
import { useQRCodeScanner } from "./useQRCodeScanner";

const Qrcode = () => {
  const { startScan } = useQRCodeScanner();
  const [showToast] = useIonToast();

  return (
    <div className="container">
      <div className="scan-button">
        <IonButton
          onClick={async () => {
            const result = await startScan();

            console.log(result);
            if (result.content === "https://www.youtube.com/embed/dQw4w9WgXcQ") {
              showToast("Bravo, good response", 2000);
            } else if (result.content === "wrong_answer") {
              showToast("Bad response!", 2000);
            } else {
              showToast("Code not found", 2000);
            }
          }}
          color="danger"
        >
          Scan
        </IonButton>
      </div>
      <div className="text">
        <p>
          <h2>Utilisez votre appareil photo pour scanner le code QR</h2>
        </p>
      </div>
      <div className="progress-buttons-qr">
        <IonButton color="warning" className="button-scenario" href="geo">
          Précédent
        </IonButton>
        <IonButton color="warning" className="button-scenario" href="fin">
          Suivant
        </IonButton>
      </div>
    </div>
  );
};

export default Qrcode;
