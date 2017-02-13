import React from 'react';
import {
  View,
  TextInput,
  Text
} from 'react-native';

import AppTheme from './Styles/AppTheme';
import LoginScreen from './Components/LoginScreen';
import SignUpScreen from './Components/SignUpScreen';


var Home = React.createClass({
  render: function() {
    return (
      <View style={AppTheme.container}>
        <LoginScreen />
      </View>
    );
  }
});

export default Home;
