import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    user_name: "Vagner Nerves",
    user_email: "Vagnernervessantos@gmail.com",
  });
}

export function tagUserInfoRemove() {
  OneSignal.User.removeTag("user_email");
}
