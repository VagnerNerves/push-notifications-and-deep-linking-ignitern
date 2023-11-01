import { OneSignal } from "react-native-onesignal";
import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";

import {
  tagUserInfoCreate,
  tagUserInfoRemove,
} from "./src/notifications/notificationsTags";

OneSignal.initialize("86932e3b-31a2-4264-ac71-5b60a502ea3b");
//OneSignal.User.addEmail("vagnernervessantos@gmail.com");

OneSignal.Notifications.requestPermission(true);
//6 Push Notifications - (17) Refatorando o componente de Notificação _ Rocketseat.mp4

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate();
  // tagUserEmailRemove();

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
