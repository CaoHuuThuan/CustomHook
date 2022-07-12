import React from 'react';
import {StyleSheet, View} from 'react-native';
import UserCard from './UserCard';
import UserList from './UserList';
const Home = () => {
  return (
    <View style={[styles.container]}>
      <UserCard />
      <UserList />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
