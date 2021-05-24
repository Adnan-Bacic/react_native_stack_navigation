import React from 'react';
import { View, Text, Button } from 'react-native';

const Login = () => (
  <>
    <View>
      <Text>auth stack</Text>
      <Button
        title="navigate to onboarding stack"
        onPress={() => {
          console.log(1);
        }}
      />
    </View>
  </>
);

export default Login;
