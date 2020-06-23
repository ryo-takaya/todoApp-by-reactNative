import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const deleteButton = (props) => {
  const {setBox, itemBox, target} = props;
  return (
    <Button
      title="DELETE"
      onPress={() => {
        console.log(itemBox);
        itemBox.splice(Number(target), 1);
        console.log(itemBox);
        setBox([...itemBox]);
      }}
    />
  );
};

export default deleteButton;
