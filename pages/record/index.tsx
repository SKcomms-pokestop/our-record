// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-native';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
// import axios from 'axios';

// export default function Record() {
//   const [recording, setRecording] = useState(false);
//   const [audioFile, setAudioFile] = useState('');
//   const [audioRecorderPlayer, setAudioRecorderPlayer] = useState(null);

//   useEffect(() => {
//     const initAudioRecorderPlayer = async () => {
//       const result = await AudioRecorderPlayer.checkAuthorizationStatus();
//       if (result === 'authorized') {
//         setAudioRecorderPlayer(new AudioRecorderPlayer());
//       }
//     };
//     initAudioRecorderPlayer();
//   }, []);

//   const startRecording = async () => {
//     const result = await audioRecorderPlayer.startRecorder();
//     setRecording(true);
//     console.log(result);
//   };

//   const stopRecording = async () => {
//     const result = await audioRecorderPlayer.stopRecorder();
//     setRecording(false);
//     console.log(result);
//   };

//   const sendAudioFile = async () => {
//     const formData = new FormData();
//     formData.append('file', {
//       uri: audioFile,
//       type: 'audio/m4a',
//       name: 'audio.m4a',
//     });

//     try {
//       const response = await axios.post(
//         'https://your-api-endpoint.com/upload-audio',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         },
//       );
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={recording ? stopRecording : startRecording}>
//         <Text style={styles.buttonText}>
//           {recording ? 'Stop Recording' : 'Start Recording'}
//         </Text>
//       </TouchableOpacity>
//       {audioFile !== '' && (
//         <TouchableOpacity style={styles.button} onPress={sendAudioFile}>
//           <Text style={styles.buttonText}>Send Audio File</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     borderRadius: 8,
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     marginVertical: 8,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//   },
// });
