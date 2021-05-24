import React from 'react';
import { View, Text, Button } from 'react-native';

const Onboarding = () => (
  <>
    <View>
      <Text>onboarding stack</Text>
      <Button
        title="navigate to main stack"
        onPress={() => {
          console.log(1);
        }}
      />
    </View>
  </>
);

export default Onboarding;
