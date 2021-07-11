import './style.css';
import { IonButton } from '@ionic/react';
import { useEffect, useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import "mapbox-gl/dist/mapbox-gl.css";
import { useWatchPosition } from '@capacitor-community/react-hooks/geolocation';

//<script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

// function useRealPosition(){
//   const { currentPosition, startWatch, clearWatch } = useWatchPosition();

//   useEffect(
//     function startWatchOnMount() {
//       startWatch();

//       return function onUnmoun(){
//         clearWatch();
//       }
//     },
//     [startWatch, clearWatch]
//   );

//   return currentPosition?.coords;

// }

function useSimulatedPosition() {
  const from = { latitude: 47.7426476, longitude: 7.3407563 };
  const to = { latitude: 47.7386289, longitude: 7.3293385 };
  const speed = 0.02; // from 0 to 1
  const refresh = 50; // ms

  const [currentPosition, setPosition] = useState(from);

  useEffect(
    () => {
      const intervalID = setInterval(() => {
        setPosition((pos) => ({
          latitude: pos.latitude + (to.latitude - pos.latitude) * speed, // formule "lerp"
          longitude: pos.longitude + (to.longitude - pos.longitude) * speed,
        }));
      }, refresh);

      return function onUnmount() {
        clearInterval(intervalID);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setPosition]
  );

  return currentPosition;
}



const Geoloc = () => {

  const [viewport, setViewport] = useState({
    width: 400,
    height: 300,
    latitude: 47.7395389333945,
    longitude: 7.329169414309033,
    zoom: 12
  });
  

  
  const position = useSimulatedPosition();

  return (
    <div className="container">
      <p>Votre destination</p>

      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/madal/cko9veuct4oy517nx984ff55g"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker
          latitude={47.7395389333945}
          longitude={7.329169414309033}
          offsetLeft={(-1 * 40) / 20}
          offsetTop={(-1 * 40) / 20}
        >
          <div
            style={{
              background: "red",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          ></div>
        </Marker>
        {position && (
          <Marker
            latitude={position.latitude}
            longitude={position.longitude}
            offsetLeft={(-1 * 30) / 2}
            offsetTop={(-1 * 30) / 2}
          >
            <div
              style={{
                background: "blue",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: "white 2px solid",
                boxShadow: "0 0 0 15px rgba(0, 0, 255, 0.4)",
              }}
            ></div>
          </Marker>
        )}
      </ReactMapGL>

      <div className="text">
        <p>
          <h3>Ne te perds pas en chemin ;)</h3>
        </p>
        <p>Suivez les indications GPS et regardez la carte !</p>
      </div>
      <div className="progress-buttons">
        <IonButton
          color="warning"
          className="button-scenario"
          routerLink="checkNumber"
        >
          Précédent
        </IonButton>
        <IonButton color="warning" className="button-scenario" routerLink="qr">
          Suivant
        </IonButton>
      </div>
    </div>
  );
};

export default Geoloc;
