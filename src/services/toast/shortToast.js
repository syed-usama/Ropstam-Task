import { Toast } from "native-base"

export const showToast = (message) =>{
    Toast.show({
        description: message,
        duration: 2000,
      })
}