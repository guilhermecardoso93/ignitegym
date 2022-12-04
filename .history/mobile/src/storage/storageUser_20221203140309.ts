import { USER_STORAGE } from "./storageConfig";
import { UserDTO } from "@dtos/UserDTO";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async  function storageUserSave(user: UserDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user))
}