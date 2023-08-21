import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from '../services/auth/authProvider';
import Routes from './routes';

const Main = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Main;