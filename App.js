/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [ errorStyle, setErrorStyle ] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`change show ${!errorStyle}`);
      setErrorStyle(!errorStyle);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [errorStyle]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={[styles.container, styles.whitebg, errorStyle && styles.redbg]}>
          <Image
          style={errorStyle && styles.applytint}
            source={require('./images/emergency.png')} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
  redbg: {
    backgroundColor: 'red',
  },
  whitebg: {
    backgroundColor: 'white',
  },
  applytint: {
    tintColor: 'white',
  }
});

export default App;
