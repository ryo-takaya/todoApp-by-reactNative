import React from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';

const Alldelete = (props) => {
  const allDelete = () => {
    props.setBox([]);
  };
  return (
    <>
      <Button title="ALLDELETE" onPress={() => allDelete()} />
    </>
  );
};

export default Alldelete;
