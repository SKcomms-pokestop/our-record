import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { Button } from 'antd-mobile-rn';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button>button</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
