// import React, { Component } from 'react';
// import { Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
// import QRCodeScanner from 'react-native-qrcode-scanner';

// // import {RNCamera} from 'react-native-camera';


// class CameraScreen extends Component {
//   onSuccess = e => {
//     Linking.openURL(e.data).catch(err =>
//       console.error('An error occured', err)
//     );
//   };


//   render() {
//     return (
//       <QRCodeScanner
//         onRead={this.onSuccess}
//         // flashMode={RNCamera.Constants.FlashMode.torch}
//         topContent={
//           <Text style={styles.centerText}>
//             Go to{' '}
//             <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
//             your computer and scan the QR code.
//           </Text>
//         }
//         bottomContent={
//           <TouchableOpacity style={styles.buttonTouchable}>
//             <Text style={styles.buttonText}>OK. Got it!</Text>
//           </TouchableOpacity>
//         }
//       />
//     );
//   }
// }



// export default CameraScreen;

// const styles = StyleSheet.create({
//   centerText: {
//     flex: 1,
//     fontSize: 18,
//     padding: 32,
//     color: '#777'
//   },
//   textBold: {
//     fontWeight: '500',
//     color: '#000'
//   },
//   buttonText: {
//     fontSize: 21,
//     color: 'rgb(0,122,255)'
//   },
//   buttonTouchable: {
//     padding: 16
//   }
// });
// // import React from 'react';
// // import { Text, View, StyleSheet } from 'react-native';

// // const ProfileScreen = () => {
// //     return (
// //       <View style={ styles.screen }>
// //         <Text>Profile Info</Text>
// //       </View>
// //     );
// // }

// // export default ProfileScreen;

// // const styles = StyleSheet.create({
// //     screen: {
// //       flex: 1,
// //       padding: 10,
// //       alignItems: 'center',
// //     },
// // });
  
  