import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Account() {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={require('../../assets/avatar6.png')}
          />

          <Text style={styles.name}>배영기</Text>
          <Text style={styles.userInfo}>배영기@sk.com </Text>
          <Text style={styles.userInfo}>사당</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/administrator-male.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>
              <MaterialCommunityIcons
                name="cog"
                size={24}></MaterialCommunityIcons>
              설정
            </Text>
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: 'https://img.icons8.com/color/70/000000/administrator-male.png',
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>
              <MaterialCommunityIcons
                name="account"
                size={24}></MaterialCommunityIcons>
              로그인/로그아웃
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    backgroundColor: '#778899',
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: '',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});
