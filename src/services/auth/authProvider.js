import React, {createContext, useState} from 'react';
import { showToast } from '../toast/shortToast';
import { Clear, getData, setData } from '../AsyncStorageServices';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password,changeLoader) => {
          try {
            console.log('email:',email)
            console.log('password:',password)
            var usersData = await getData('usersData')
            if(usersData && usersData.length > 0){
            var found = false;
            var newUser = '';
            for(var i = 0; i < usersData?.length; i++) {
               if (usersData[i].email == email) {
                    found = true;
                    newUser = usersData[i];
                    break;
                }
            }
            if(found){
              if( password == newUser.password){
                await setData('userData', newUser)
                setUser(newUser)
                changeLoader(false)
              }else{
                showToast("your password is incorrect")
              changeLoader(false);
              }
            }else{
              showToast("No user registerd against this email")
              changeLoader(false);
            }

          }else{
            showToast("No user registerd against this email")
            changeLoader(false);
          }
          } catch (e) {
            showToast("Something went wrong")
            changeLoader(false);
          }
        },
        register:async (newUser,changeLoader) => {
          var users = [];
          var usersData = await getData('usersData')
          if(usersData && usersData.length > 0){
            users = usersData;
            users.push(newUser);
            await setData('usersData', users)
            changeLoader(false)
            showToast("User register successfully")
          }else{
            users.push(newUser);
            await setData('usersData', users)
            changeLoader(false)
            showToast("User register successfully")
          }
          
        },
        logout: async () => {
          try {
            Clear('userData')
            setUser('')
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
