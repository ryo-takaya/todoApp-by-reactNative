import React, {Component} from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';
import DeleteButton from './DeleteButton';
import Item from './Item';

const TaskContainer = (props) => {
  const {text, setBox, itemBox, num} = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderWidth: 2,
          borderColor: '#20232a',
          margin: 15,
        }}>
        <Item text={text} />
        <DeleteButton target={num} setBox={setBox} itemBox={itemBox} />
      </View>
    </>
  );
};

export default TaskContainer;
