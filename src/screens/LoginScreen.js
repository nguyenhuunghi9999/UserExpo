import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import axios from 'axios';

const LoginScreen = ({navigation}) => {

    //handle input
    const [username, setUsename] = useState('');
    const [password, setPassword] = useState('');

    const onChangedUsername = value => {
        setUsename(value)
    }

    const onChangedPassword = value => {
        setPassword(value)
    }

    //handle login
    const onLogin = () => {
        //validate
        if(username.length == 0 || password.length == 0){
            return console.log("Vui long nhap thong tin")   
        }
        //call api===
        // axios({
        //     url:'https://exmaple/api/user/login',
        //     method: 'POST',
        //     data:{
        //         username: username,
        //         password: password
        //     }
        // }).then(result => {
        //     console.log(result.data);
        // }).catch(e => {
        //     console.log(e.response.data)
        // })

        console.log("click login",{
            username,
            password,
        })

        navigation.navigate('Home')

    }

    return (
        <View 
        style={{
            backgroundColor: '#3498DB',
            flex:1,
        }}>
        <View style={{
            backgroundColor:'white',
            margin: 10,
            flex:1,
            borderRadius: 10
        }}>
            <View style={{
            flex:1,
            marginVertical: 20
            }}>
            {/* header */}
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
                }}>Login</Text>
            </View>
            {/* body */}
            <View style={{flex:6,}}>
                <View style={{margin: 30}}>
                {/* Username */}
                <View style={{marginBottom: 20}}>
                    <Text style={{color: "black", fontWeight: 'bold', fontSize: 15}}>Username</Text>
                    <View style={{flexDirection: 'row',borderBottomWidth: 1, padding: 10, borderColor: "gray"}} >
                    <View><Entypo name="user" size={24} color="gray" /></View>
                    <View>
                        <TextInput 
                        style={{marginLeft: 10}} 
                        placeholder="Username"
                        value={username}
                        onChangeText={onChangedUsername}/>
                    </View>
                    </View>
                </View>
                {/* Password */}
                <View>
                    <Text style={{color: "black", fontWeight: 'bold', fontSize: 15,}}>Password</Text>
                    <View style={{flexDirection: 'row',borderBottomWidth: 1, padding: 10, borderColor: "gray"}} >
                    <View><Entypo name="lock" size={24} color="gray" /></View>
                    <View>
                        <TextInput 
                        style={{marginLeft: 10}} 
                        secureTextEntry={true}
                        placeholder="Password"
                        value={password}
                        onChangeText={onChangedPassword}/>
                    </View>
                    </View>
                </View>
                {/* ForgetPassword */}
                <View style={{alignItems: 'flex-end', marginVertical: 20}}>
                    <Text>ForgetPassword?</Text>
                </View>

                {/* Login Button */}
                <View style={{
                    marginVertical: 20,
                }}>
                    <LinearGradient 
                    style={{padding: 10,
                    borderRadius: 50,
                    width:"100%",
                    justifyContent: 'center',
                    alignItems: 'center'}}
                    colors={['#AED6F1', '#3498DB',"#e166f4"]}
                    >
                    <TouchableOpacity onPress={onLogin}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                    </LinearGradient>
                </View>
                </View>

                <View style={{marginVertical: 20, justifyContent: 'center', alignItems: "center"}}>
                <Text>Or Sign Up Using</Text>
                <View style={{flexDirection: "row",marginVertical: 20 }}>
                    <Entypo name="facebook-with-circle" size={50} color="#3f67a9" />
                    <Entypo name="twitter-with-circle" size={50} color="#3b9aec" />
                    <Entypo name="google--with-circle" size={50} color="#e85b4b" />
                </View>
                </View>
            </View>

            {/* footer */}
            <View style={{flex:2, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Or Sign Up Using</Text>
                <TouchableOpacity style={{padding: 20}}>
                    <Text style={{fontWeight: "bold", color: 'black'}}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

            </View>
        </View>
        </View>
  );
}

export default LoginScreen;

