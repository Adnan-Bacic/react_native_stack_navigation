import React from 'react';
import { View, Text, Button } from 'react-native';
import * as functions from '../../redux/functions';

const Feed = () => (
  <>
    <View>
      <Text>main stack</Text>
      <Button
        title="navigate to auth stack"
        onPress={async () => {
          await functions.auth.logoutUser();
        }}
      />
    </View>
  </>
);

export default Feed;
