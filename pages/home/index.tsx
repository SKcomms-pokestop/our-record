import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';
import { USERINFO_REQUEST } from '../../modules/reducers/common';
import { OurButton } from '../../components/Common/Button';
import WingBlank from '../../components/Common/WingBlank';

export default function Home() {
  const { email } = useSelector((state: RootState) => state.common.user);

  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: USERINFO_REQUEST,
      });
    }, 1000);
  }, []);

  return (
    <View>
      <Text>{email}</Text>
      <WingBlank>
        <OurButton text="안녕" onPress={() => alert('hi?')} />
        <OurButton text="안녕" onPress={() => alert('hi')} loading />
      </WingBlank>
      {/* <OurButton text="안녕" loading /> */}
    </View>
  );
}
