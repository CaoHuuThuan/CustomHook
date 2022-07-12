import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FetchValueProps, UserInfoProps} from '../../../type';
import useFetch from '../../hook/useFetch';
const URL_USERS = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
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
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 50,
          marginVertical: 10,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <Text>{`Name: ${item.username} `}</Text>
        <Text>
          - Phone:
          {item.phone}
        </Text>
      </View>
    );
  };
  return (
    <View style={[styles.container]}>
      {loading ? (
        <ActivityIndicator size="large" color="red" style={styles.loading} />
      ) : (
        <View>
          <Text>User list</Text>
          <FlatList
            data={data || []}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
          />
        </View>
      )}
    </View>
  );
};

export default UserList;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 200,
  },
  loading: {height: '100%'},
});
