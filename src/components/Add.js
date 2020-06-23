import React, {useState} from 'react';

import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';

const Add = (props) => {
  const {value, itemBox, setBox, onChangeText} = props;
  const addItem = () => {
    setBox(itemBox.concat(value));

    onChangeText('');
  };
  return <Button onPress={() => addItem()} title="ADD" />;
};

export default Add;
