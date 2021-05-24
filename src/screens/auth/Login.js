import React from 'react';
import { View, Text, Button } from 'react-native';
import * as functions from '../../redux/functions';

const Login = () => (
  <>
    <View>
      <Text>auth stack</Text>
      <Button
        title="navigate to onboarding stack"
        onPress={async () => {
          await functions.auth.loginUser();
        }}
      />
    </View>
  </>
);

export default Login;
