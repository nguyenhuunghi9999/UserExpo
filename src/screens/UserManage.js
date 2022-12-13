import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useInsertionEffect, useState } from 'react'
import axios from 'axios'
import { AntDesign } from '@expo/vector-icons';

const UserManage = () => {

    //initial state
    const [userList, setUserList] = useState([]);
    const [keySearch, setKeySearch] = useState("");

    useEffect(() => {
        getData();
      }, []);

    // //handle key search
    // useEffect(() => {
    //     console.log('key search changed', keySearch)
    // },[keySearch])

    const onChangedKey = (value) => setKeySearch(value)
    
    //fetch data
    const getData = () => {
        axios
          .get("https://6396d18286d04c7633819bdc.mockapi.io/user")
          .then((userList) => setUserList(userList.data));
    }

    //onDelete
    const onDelete = (id) => {
        console.log('delete', id)
        fetch("https://6396d18286d04c7633819bdc.mockapi.io/user/" + id, {
            method: "DELETE",
          });
          setUserList(userList.filter((item) => item.id !== id));
          axios
            .get("https://6396d18286d04c7633819bdc.mockapi.io/user")
            .then((userList) => {
              setUserList(userList.data);
            });
    }
  return (
    <View style={{flex: 1, marginTop: 40}}>

    {/* search bar */}
    <View style={{padding: 10}}>
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            justifyContent: 'space-around',
            alignItems: 'center'
        }}>
            <TextInput 
            style={{flex: 1, marginLeft: 10}} 
            placeholder={'Search'} 
            value={keySearch}
            onChangeText ={onChangedKey}
            />
            <AntDesign
            style={{
                padding:10
            }} name="search1" size={24} color="black" />
        </View>
    </View>
      <FlatList
      refreshing={false}
      onRefresh={()=> getData()}
    //   data={userList}
      data={userList.filter(user => user.username.search(keySearch) > -1)}
      key={(t) => t.id}
      renderItem={({ item }) => (
        <View
            style={{
                padding: 10,
                borderRadius: 10,
                backgroundColor: 'white',
                marginBottom: 10,
                flexDirection: 'row',
                margin: 10,
            }}>
            <Image 
            style={{
                width: 80,
                height: 80,
                borderRadius: 10}}
            source={{
                uri: item.avatar,
            }}
            />
            <View style={{paddingLeft:10, justifyContent: 'center'}}>
                <Text style={{color: '#2E86C1', fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>{item.username}</Text>
                <Text>{item.role}</Text>
                <Text>{item.status}</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
           <TouchableOpacity 
           onPress={()=>{onDelete(item.id)}}
           style={{
            backgroundColor: 'red',
            padding: 5,
            borderRadius: 5,
            width: 30,
            height: 30,
            marginLeft:160
           }}>
                <AntDesign name="delete" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      )}
      />
    </View>
  )
}

export default UserManage