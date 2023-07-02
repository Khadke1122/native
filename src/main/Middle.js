
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


// *************************************************************************





import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert,Text } from 'react-native';

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
      
      Alert.alert('Success', 'Input is valid');
    } else {
      
      Alert.alert('Error', 'Invalid input');
    }
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

  navigation.navigate('SecondPage',{emailValue,numberValue});

  return (
    <View style={styles.container}>
        <Text style={styles.texta}>Welcome to our's Company please sign to know more </Text>
     
        <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={emailValue}
        onChangeText={handleEmailInputChange}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter number"
        keyboardType="numeric"
        value={numberValue}
        onChangeText={handleNumberInputChange}
      />
 
      <Button 
      title="Submit.." 
      onPress={handleLogin} 
      style={styles.btn}
      disabled={!emailValue && !numberValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  
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
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 50,
    color:'#343B30',
  },
  btn:{
width: 50,
  },
});


export default LoginPage;
