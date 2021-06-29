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
        >
          Scan
        </IonButton>
      </div>
      <div className="text">
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum
        </p>
      </div>
      <IonButton className="button-scenario" href="geo">
        Précédent
      </IonButton>
      <IonButton className="button-scenario" href="fin">
        Suivant
      </IonButton>
    </div>
  );
};

export default Qrcode;
