import React from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

import Button from 'react-native-button';

import AppTheme from '../Styles/AppTheme';

var LoginScreen = React.createClass({
  signIn: function() {
    console.log("login");
  },

  render: function() {
    return (
      <View>
        <Text style={AppTheme.heading}>Sign In</Text>
        <TextInput
          placeholder="username"
        />
        <TextInput placeholder="password"/>
        <Text style={AppTheme.alignCenter}>Forgot your password</Text>
        <Text style={AppTheme.alignCenter}>Create an account</Text>
        <Button
          onPress={this.signIn}
          style={AppTheme.defaultButton}
        >Login</Button>
      </View>
    );
  }
});

export default LoginScreen;
