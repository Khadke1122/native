
// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert,Text } from 'react-native';
// const LoginPage = () => {
//   const navigation = useNavigation();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (!username) {
//       Alert.alert('Error', 'Please enter a username or email');
//       return;
//     }

  
//     if (!password) {
//       Alert.alert('Error', 'Please enter your name');
//       return;
//     }
//     const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const numberRegex = /^\d+$/;

//     if (!emailRegex.test(username) && !numberRegex.test(username)) {
//       Alert.alert('Error', 'Please enter a valid email or number');
//       return;
//     }

//     navigation.navigate('SecondPage',{username});
//     setUsername('');
//     setPassword('');
//   };

//   return (
//     <View style={styles.container}>
//         <Text style={styles.texta}>Welcome to our's Company please sign to know more </Text>
     
//         <TextInput
//         style={styles.input}
//         placeholder="Enter your Name"
//         value={password}
//         onChangeText={setPassword}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Email or number"
//         value={username}
//         onChangeText={setUsername}
//       />
 
//       <Button 
//       title="Submit.." 
//       onPress={handleLogin} 
//       // onPress={() => navigation.navigate('SecondPage')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
  
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderColor: 'black',
//     marginBottom: 30,
//     paddingHorizontal: 20,
//     borderRadius:10,
//     borderWidth: 1,

//   },
//     texta: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginVertical: 50,
//     color:'#343B30',
//   },
// });


// export default LoginPage;




import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert,Text } from 'react-native';
import { Stack, Button } from "@react-native-material/core";

const LoginPage = () => {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

 
  const handleEmailInputChange = (text) => {
    setEmailValue(text);
  };

  const handleNumberInputChange = (text) => {
    setNumberValue(text);
  };

  const handleLogin = () => {
    if (validateInput(emailValue, numberValue)) {
      
      Alert.alert('Success', 'Otp will be send to your mail or number');
    } else {
      
      Alert.alert('Error', 'Invalid input');
    }
      navigation.navigate('SecondPage',{emailValue,numberValue});

  };

  const validateInput = (email, number) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const numberRegex = /^[0-9]+$/;

    const isEmailValid = emailRegex.test(email);
    const isNumberValid = numberRegex.test(number);

    return isEmailValid || isNumberValid;
    
  };
  // navigation.navigate('SecondPage',{emailValue});
  // navigation.navigate('SecondPage',{numberValue});


  return (
    <View style={styles.container}>
  <View style={styles.top}>
    <Text style={{color:'red', fontSize:50,marginTop:-10}}>◥█̆̈◤</Text>
    <Text style={styles.texta}> Welcome to our's Company please sig-in to know more </Text>
  </View>

     
        <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={emailValue}
        onChangeText={handleEmailInputChange}
        editable={!numberValue}
      />
      <Text style={{fontSize:30,marginBottom:25,marginRight:30}}>OR</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
        value={numberValue}
        onChangeText={handleNumberInputChange}
        editable={!emailValue}
      />
 <Stack  fill center spacing={4}>
      {/* <Button
      title="Submit.." 
      onPress={handleLogin} 
      style={styles.btn}
      /> */}
      <Button color="pink" tintColor="red"
            title="Submit.." 
      onPress={handleLogin} 
      style={styles.btn} />
  </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderLeftColor:"black",
    borderRightColor:"white",
    borderBottomColor:'white',
    borderWidth:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    
  
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'black',
    marginBottom: 30,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius:10,


  },
    texta: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 50,
    color:'#343B30',
  },
  btn:{
width: 140,
height:40,
 },

  top:{
    display:'flex'
  }
});


export default LoginPage;



// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

// const SignInPage = () => {
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');

//   const handleSignIn = () => {
//     if ((!email && !number) || (email && number)) {
//       Alert.alert('Error', 'Please enter either an email or a number');
//       return;
//     }

//     if (email && !validateEmail(email)) {
//       Alert.alert('Error', 'Please enter a valid email');
//       return;
//     }

//     if (number && !validateNumber(number)) {
//       Alert.alert('Error', 'Please enter a valid number');
//       return;
//     }
//   };

//   const validateEmail = (email) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validateNumber = (number) => {
//     return /^\d+$/.test(number);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         keyboardType="email-address"
//         autoCapitalize="none"
//         editable={!number} // Disable editing if number is filled
//       />

      
      

//       <TextInput
//         style={styles.input}
//         placeholder="Number"
//         value={number}
//         onChangeText={setNumber}
//         keyboardType="numeric"
//         editable={!email} // Disable editing if email is filled
//       />

//       <Button title="Sign In" onPress={handleSignIn} disabled={!email && !number} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 10,
//   },
// });

// export default SignInPage;
