import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const deleteButton = (props) => {
  const {setBox, itemBox, target} = props;
  return (
    <Button
      title="DELETE"
      onPress={() => {
        itemBox.splice(Number(target), 1);

        setBox([...itemBox]);
      }}
    />
  );
};

export default deleteButton;
