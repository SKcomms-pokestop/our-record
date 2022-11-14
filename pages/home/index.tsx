import { Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';
import { USERINFO_REQUEST } from '../../modules/reducers/common';

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
    </View>
  );
}
