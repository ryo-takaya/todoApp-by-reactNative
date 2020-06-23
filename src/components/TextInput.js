import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

import CheckBox from 'react-native-check-box';

const Textinput = (props) => {
  const {onChangeText, value} = props;
  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default Textinput;
