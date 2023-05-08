import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import axios from 'axios';

const recorder = new AudioRecorderPlayer();

const Recorder = () => {
  const [audioData, setAudioData] = useState<any>(null);

  const startRecord = async () => {
    const result = await recorder.startRecorder();

    recorder.addRecordBackListener(e => {});
    // console.log(result);
  };

  const stopRecord = async () => {
    const result = await recorder.stopRecorder();

    recorder.removeRecordBackListener();
    setAudioData(result);
    // console.log(result);
  };

  const sendAudio = async () => {
    if (audioData) {
      //   const formData = new FormData();
      //   formData.append('audio', {
      //     uri: audioData.path,
      //     type: 'audio/mp4',
      //     name: 'audio.mp4',
      //   });

      //   try {
      //     const response = await axios.post(
      //       'https://your-api-url.com/upload',
      //       formData,
      //       {
      //         headers: {
      //           'Content-Type': 'multipart/form-data',
      //         },
      //       },
      //     );
      //     console.log(response);
      //   } catch (error) {
      //     console.log(error);
      //   }
      // CLOVA Speech API 정보
      const CLIENT_ID = '5DEA700B7CABF06ACFA5';
      const CLIENT_SECRET = 'ECD035ADE8C0AA26AB2402226533650204BC0C4E';
      const LANGUAGE_CODE = 'ko-KR'; // 인식할 언어 코드
      const URL = `https://clovaspeech-gw.ncloud.com/external/v1/4609/fec78d451acd9e86c125ddf2badf561475da1b8d288448a643e850487eb9ad17/recognizer/url`;
      // 파일 정보
      const formData = new FormData();
      formData.append('data', audioData.path);

      // Axios를 사용하여 CLOVA Speech API 요청
      try {
        const response = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
            'X-NCP-APIGW-API-KEY': CLIENT_SECRET,
            'X-CLOVASPEECH-API-KEY': 'd0ba313a3af74d8798911ee6c51e4564',
          },
        });
        console.log(response);
        // 음성 인식 결과는 다음과 같이 확인할 수 있습니다.
        const resultText = response.data.text;
        console.log(resultText);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={startRecord}>
        <Text>Start Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopRecord}>
        <Text>Stop Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendAudio}>
        <Text>Send Audio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Recorder;
