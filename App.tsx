const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MensajesDirectos from "./screens/MensajesDirectos";
import VistaDm from "./screens/VistaDm";
import FrameMainMenu from "./screens/FrameMainMenu";
import FrameAjustes from "./screens/FrameAjustes";
import IniciarRutina from "./screens/IniciarRutina";
import Foros from "./screens/Foros";
import SeleccionarRutina from "./screens/SeleccionarRutina";
import FrameVerHistorial from "./screens/FrameVerHistorial";
import DetalleRutina from "./screens/DetalleRutina";
import VistaForo from "./screens/VistaForo";
import FrameSeleccionTiempo from "./screens/FrameSeleccionTiempo";
import DetalleEjercicio from "./screens/DetalleEjercicio";
import VistaEjecucinRutina from "./screens/VistaEjecucinRutina";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MensajesDirectos"
              component={MensajesDirectos}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VistaDm"
              component={VistaDm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameMainMenu"
              component={FrameMainMenu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameAjustes"
              component={FrameAjustes}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IniciarRutina"
              component={IniciarRutina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Foros"
              component={Foros}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SeleccionarRutina"
              component={SeleccionarRutina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameVerHistorial"
              component={FrameVerHistorial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalleRutina"
              component={DetalleRutina}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VistaForo"
              component={VistaForo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FrameSeleccionTiempo"
              component={FrameSeleccionTiempo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetalleEjercicio"
              component={DetalleEjercicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VistaEjecucinRutina"
              component={VistaEjecucinRutina}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
