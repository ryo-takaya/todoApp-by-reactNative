import React, {useState} from 'react';
import Addfield from './Addfield';
import Textinput from './TextInput';
import Add from './Add';

import {StyleSheet, ScrollView, View, Text} from 'react-native';

const Container = () => {
  const [value, onChangeText] = useState('');
  const [itemBox, setBox] = useState([]);
  return (
    <>
      <View style={{marginTop: 100}}>
        <Textinput value={value} onChangeText={onChangeText} />
        <Add
          onChangeText={onChangeText}
          value={value}
          itemBox={itemBox}
          setBox={setBox}
        />
        <Addfield itemBox={itemBox} setBox={setBox} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 100},
});

export default Container;
