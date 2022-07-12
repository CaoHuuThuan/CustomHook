import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {FetchValueProps, UserInfoProps} from '../../../type';

import useFetch from '../../hook/useFetch';
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

const UserCard = () => {
  //   const {loading, data, error}: FetchValueProps = useFetch(URL_USERS);
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<UserInfoProps[]>();
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(URL_USERS);
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    FetchData();
  }, []);
  console.log(loading, data, error);
  const renderCard = () => {
    return (
      <View
        style={{
          height: 50,
          marginVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>
          Name:
          {data?.[0]?.username}
        </Text>
        <Text>Email: {data?.[0]?.email}</Text>
        <Text>Phone: {data?.[0]?.phone}</Text>
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" style={styles.loading} />
      ) : (
        <View>
          <Text>User info</Text>
          {renderCard()}
        </View>
      )}
    </View>
  );
};

export default UserCard;
const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: 20,
    height: 100,
  },
  loading: {height: '100%'},
});
