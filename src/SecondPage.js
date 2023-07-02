// npm i react-native-confirmation-code-field



import {StyleSheet, Text, View, Alert} from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import Verification from './Verification';
import { Stack,Button } from '@react-native-material/core';


const SecondPage = () => {
        const [text, setText] = useState('');
    
        if (isNaN(text)) {
          Alert.alert('Error', 'Otp must be a number');
          return;
        }
    const inputChange = (e) =>{
        setText(e);
    }

    const pressAlert =()=>{
      return(
        Alert.alert("Login successfullyyy...")
      )
    };
  

    const route = useRoute() 
    const {emailValue,numberValue} = route.params;
  
  return (
   
       <View style={styles.container}>
        <Text style={{color:'red', fontSize:50,marginRight:100}}>◥█̆̈◤</Text>
  <Text style={styles.text}>Thank you for Sign - In </Text>
  <Text style={{color:'black', fontSize:22}}> {emailValue} </Text>

  <Text style={{color:'black', fontSize:22}}> {numberValue} </Text>
  <Text>You will get OTP within a sec.. please check your Gmail or msg </Text>
  
  {/* <TextInput
       onChangeText={inputChange}
       value={text}
       style={styles.input1}
       placeholder="OTP"
       maxLength={4}
        /> */}

        <Verification />
        {/* <Button
         title="VERIFY"
         onPress={pressAlert}
         style={styles.btn}
         /> */}
         {/* <Image source={{ uri: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }} style={styles.image} /> */}
<Stack >

<Button  color="pink" tintColor="red" 
   title="VERIFY"
         onPress={pressAlert}
         style={styles.btnn}
/>
</Stack>
    </View>
  );
};


export default SecondPage

const styles = StyleSheet.create({
    container:{
      
        // flex: 2,
        borderLeftColor:"white",
        borderRightColor:"black",
        borderBottomColor:'black',
        borderTopColor:'white',
        borderWidth:20,
        height:"100%",
                padding: 20,
    },
text:{
            fontSize: 22,
            fontWeight: 'bold',
            marginVertical: 10,
            color:'black',
    },
input1:{
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 4,
    padding: 7,
    marginVertical: 50,
  },
  image: {
    marginTop:70,
    width: 300,
    height: 200,
  },
  btnn:{
    width:130,
marginLeft:50,
  }
  
});




