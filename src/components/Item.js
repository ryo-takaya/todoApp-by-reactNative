import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import CheckBox from 'react-native-check-box';

const Item = (props) => {
  return (
    <>
      <Text style={{margin: 15, fontSize: 20, marginLeft: 15}}>
        {props.text}
      </Text>
    </>
  );
};

export default Item;
