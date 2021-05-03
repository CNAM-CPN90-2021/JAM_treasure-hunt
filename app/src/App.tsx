import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Geoloc from './pages/Geoloc';
import Qrcode from './pages/Qrcode';
import Fin from './pages/Fin';
import Intro from './pages/Intro';
import Text from './pages/Text';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/geo">
          <Geoloc />
        </Route>
        <Route exact path="/qr">
          <Qrcode />
        </Route>
        <Route exact path="/fin">
          <Fin />
        </Route>
        <Route exact path="/intro">
          <Intro />
        </Route>
        <Route exact path="/text">
          <Text />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
