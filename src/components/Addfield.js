import React, {Component} from 'react';
import {StyleSheet, Text, ListView, View} from 'react-native';
import deleteButton from './DeleteButton';
import Item from './Item';
import TaskContainer from './TaskContainer';

const Addfield = (props) => {
  const Box = props.itemBox.map((text, i) => (
    <TaskContainer
      key={i}
      num={i}
      text={text}
      itemBox={props.itemBox}
      setBox={props.setBox}
    />
  ));

  return <View style={{marginTop: 45}}>{Box}</View>;
};

export default Addfield;
