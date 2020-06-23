/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React, {Component} from 'react';
// import {AppRegistry} from 'react-native';

// import TodoListContainer from './src/TodoListContainer';

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return <TodoListContainer />;
//   }
// }

// AppRegistry.registerComponent('Todo', () => Todo);
