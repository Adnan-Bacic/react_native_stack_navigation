import React from 'react';
import { View, Text, Button } from 'react-native';
import * as functions from '../../redux/functions';

const Onboarding = () => (
  <>
    <View>
      <Text>onboarding stack</Text>
      <Button
        title="navigate to main stack"
        onPress={async () => {
          await functions.auth.finishOnboarding();
        }}
      />
    </View>
  </>
);

export default Onboarding;
