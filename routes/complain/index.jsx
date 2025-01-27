import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const ComplainPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://c.webservicehouse.com/Homepage_mobile?KC=FSJ5w2rt' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    marginTop:-95
  },
});

export default ComplainPage;
