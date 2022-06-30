import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => {
  const [toggle, setToogle] = useState(false);

  const handleChangeToggle = () => setToogle(oldToggle => !oldToggle);

  useEffect(() => {
    Torch.switchState(toggle);
  }, {toggle}) 

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToogle(oldToggle => !oldToggle);
    });
    return () => subscription.remove();
  });
      
  return (
  <View style={toggle ? style.containerLigth : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
    <Image
    sytle={toggle ? style.lightingOn : style.lightingOff}
    source={
      toggle 
      ? require('./assets/icons/Acesa.png')
      :require('./assets/icons/Apagada.png')
    }
    />
    </TouchableOpacity>
  </View>
  );
};

export default App

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLigth: {
    flex: 1,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    heigth: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    heigth: 150,
  },
});