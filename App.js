//   Sample React Native App
//   https://github.com/facebook/react-native

//   @format
//  @flow strict-local

import React from 'react';
{
  /* <script src="http://192.168.10.116:8097"></script>; */
}
import {Provider} from 'react-redux';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import store from './src/redux/store';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Container from './src/components/Container';

const App: () => React$Node = () => {
  return (
    <>
      <ScrollView>
        <Container />
      </ScrollView>
    </>
  );
};

export default App;

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
