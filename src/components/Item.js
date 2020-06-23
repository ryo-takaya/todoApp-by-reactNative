import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const Item = (props) => {
  return <Text style={{marginLeft: 15}}>{props.text}</Text>;
};

export default Item;
