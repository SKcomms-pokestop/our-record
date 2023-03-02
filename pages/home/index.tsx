import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules/reducers';
import { USERINFO_REQUEST } from '../../modules/reducers/common';
import { OurButton } from '../../components/Common/Button';
import WingBlank from '../../components/Common/WingBlank';
import styled from '@emotion/native';
import Layout from '../../components/Common/Layout';

export default function Home() {
  // const { email } = useSelector((state: RootState) => state.common.user);

  const dispatch = useDispatch();

  const [data, setData] = useState([
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    { key: '3', title: 'Item 3' },
  ]);

  const renderItem = ({ item }: { item: typeof data[number] }) => (
    <StyledItem>
      <StyledTitleDateArea>
        <StyledTitle>{item.title}</StyledTitle>
        <Text>date</Text>
      </StyledTitleDateArea>
      <StyledContentArea>
        <Text>내용</Text>
      </StyledContentArea>
    </StyledItem>
  );

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: USERINFO_REQUEST,
  //     });
  //   }, 1000);
  // }, []);

  return (
    <Layout title="최근 회의록">
      <View>
        {/* <Text>{email}</Text> */}
        {/* <OurButton text="안녕" loading /> */}
        <WingBlank>
          <FlatList data={data} renderItem={renderItem} scrollEnabled={false} />
        </WingBlank>
      </View>
    </Layout>
  );
}

const StyledItem = styled.View`
  margin: 0 0 10px;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  border-bottom-style: solid;
`;
const StyledTitleDateArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const StyledContentArea = styled.View``;
const StyledTitle = styled.Text`
  color: blue;
`;
