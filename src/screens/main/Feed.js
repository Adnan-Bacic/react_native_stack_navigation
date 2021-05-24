import React from 'react';
import { View, Text, Button } from 'react-native';

const Feed = () => (
  <>
    <View>
      <Text>main stack</Text>
      <Button
        title="navigate to auth stack"
        onPress={() => {
          console.log(1);
        }}
      />
    </View>
  </>
);

export default Feed;
