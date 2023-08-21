import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../services/auth/authProvider';

import {Provider as StoreProvider} from 'react-redux';
import store from '../redux/store/store';
import {DashboardStackNavigator, OnBoardStackNavigator} from './stackNavigator';
import {getData} from '../services/AsyncStorageServices';

export default function Routes() {
  const {user, setUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const checkDetails = async () => {
    try {
      const userData = await getData('userData');
      if (userData && userData != null) {
        setUser(userData);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    checkDetails();
  }, []);
  if (loading) {
    return null;
  }
  return (
    <NavigationContainer>
      {user ? (
        <StoreProvider store={store()}>
          <DashboardStackNavigator />
        </StoreProvider>
      ) : (
        <StoreProvider store={store()}>
          <OnBoardStackNavigator />
        </StoreProvider>
      )}
    </NavigationContainer>
  );
}
