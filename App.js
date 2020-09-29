import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator'
import configureStore from './redux/store/configureStore';

function App() {
  const store = configureStore()

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;







// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import {
//   StyleSheet,
//   View,
//   Button,
//   Text,
//   Image
// } from 'react-native';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Provider } from 'react-redux';
// import configureStore from './redux/store/configureStore';
// import * as actions from './redux/actions/getUrl';

// export default function App() {
//   // const [url, setUrl] = useState(null)
//   // const [loading, setLoading] = useState(true)
//   // const [error, setError] = useState(null)
//   const store = configureStore()
//   const { url, loading, error } = store.getState()

//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <Button 
//           onPress={() => {
//             store.dispatch(actions.fetchUrl())
//             unsubscribe()
//           }}
//           title="Show Image"
//         />
//         {loading
//           ? <Text>Loading...</Text>
//           : error
//             ? <Text>Error, try again</Text>
//             : <Text><Image source={{ uri: url }} /></Text>}
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });