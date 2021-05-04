import React, { useState, useEffect } from 'react';
import './style.css';
import img from '../components/map.png';
import { IonButton } from '@ionic/react';
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Geoloc = () => {
  const [viewport, setViewport] = useState({
    width: 360,
    height: 300,
    latitude: 43.616147,
    longitude: 1.396916,
    zoom: 13
  });


  return (
    <div className="container">
      <p>Votre destination</p>
      <ReactMapGL
        className="map"
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      >
        <Marker
          latitude={43.616147}
          longitude={1.396916}
          offsetLeft={-1 * 50 / 2}
          offsetTop={-1 * 50 / 2}
        >
          <h1>Bitch</h1>
          <div
            style={{
              background: "red",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          >
            <img src="" alt="" srcset="" />
          </div>
        </Marker>
        <Marker
          latitude={47.745}
          longitude={7.33}
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
      </ReactMapGL>
      <div className="text">
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
        <br />
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </p>
      </div>
      <IonButton className="button-scenario" href="text">Précédent</IonButton>
      <IonButton className="button-scenario" href="qr">Suivant</IonButton>
    </div>

  );
};

export default Geoloc;
