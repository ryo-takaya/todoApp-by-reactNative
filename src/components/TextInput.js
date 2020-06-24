import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const Textinput = (props) => {
  const {onChangeText, value} = props;
  return (
    <TextInput
      style={{
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default Textinput;
